export interface IAct {
	// id: string;
	number: number;
	description: string;
	chapters: { number: number; title: string }[];
}

export interface UserData {
	email?: string;
	uid?: string;
	displayName?: string;
	photoURL?: string;
	joined?: number;
	stripeCustomerId?: string;
	is_pro?: boolean;
	expires?: number;
	pro_status?: 'lifetime' | 'active' | 'past_due' | 'expiring' | 'canceled';
	acts?: {
		[key: string]: string;
	};
}
