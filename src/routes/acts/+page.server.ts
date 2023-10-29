import { acts } from '../../../content/acts';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { acts };
}) satisfies PageServerLoad;
