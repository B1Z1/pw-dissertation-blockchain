import { z } from 'zod';

export const diplomasAddFormSchema = z.object({
	title: z.string()
		.min(1, { message: 'Tytuł pracy jest wymagany' }),
	author: z.string()
		.min(1, { message: 'Autor jest wymagany' }),
	advisor: z.string()
		.min(1, { message: 'Promotor jest wymagany' }),
	university: z.string()
		.min(1, { message: 'Uczelnia jest wymagana' }),
	department: z.string()
		.min(1, { message: 'Wydział jest wymagany' }),
	abstract: z.string()
		.min(10, { message: 'Streszczenie pracy jest wymagane' })
		.max(1000, { message: 'Streszczenie pracy nie może być dłuższe niż 1000 znaków' }),
	submissionDateTime: z.date(),
	keywords: z.string()
		.min(1, { message: 'Słowa kluczowe są wymagane' }),
	file: z.instanceof(File)
});
