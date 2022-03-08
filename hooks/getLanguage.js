import { useRouter } from "next/router";

export const getLanguage = () => {
	const router = useRouter();
	return router.locale;
};
