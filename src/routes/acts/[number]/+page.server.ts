/* eslint-disable @typescript-eslint/no-explicit-any */
import { error } from '@sveltejs/kit';
import { acts } from '../../../../content/acts';
import type { PageServerLoad } from './$types';

export const load = (async ({ params }: any) => {
	const { number } = params;
	const act = acts.find((act) => act.number.toString() === number);

	if (!act) {
		throw error(404, { message: 'Act not found' });
	}

	return { act };
}) satisfies PageServerLoad;
