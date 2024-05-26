import { UseFormReturn } from 'react-hook-form';
import { z } from 'zod';
import { diplomasAddFormSchema } from './diplomasAddFormSchema';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/form';
import { Input } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/input';
import { Textarea } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/textarea';
import { CalendarIcon } from '@radix-ui/react-icons';
import { format } from 'date-fns';
import { cn } from '@pw-dissertation-blockchain/ui-kit/util';
import { Button } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/popover';
import { Calendar } from '@pw-dissertation-blockchain/ui-kit/ui/lib/ui/calendar';

export type DiplomasTableToolbarAddFormProps = {
	form: UseFormReturn<z.infer<typeof diplomasAddFormSchema>>;
	onSubmit: (values: z.infer<typeof diplomasAddFormSchema>) => void;
	className?: string;
};


export const DiplomasTableToolbarAddForm = ({ form, onSubmit, className }: DiplomasTableToolbarAddFormProps) => {
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)}
			      className={cn(className, 'space-y-2')}>
				<FormField control={form.control}
				           name="title"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Tytuł Pracy
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Tytuł pracy..."
								                  {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="author"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Autor Pracy
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Autor pracy..."
								                  {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="advisor"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Promotor
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Promotor pracy..."
								                  {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="university"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Uczelnia
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Uczelnia..."
								                  {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="department"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Wydział
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Wydział..."
								                  {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="abstract"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Streszczenie
							           </FormLabel>

							           <FormControl>
								           <Textarea placeholder="Streszczenie..."
								                     {...field}/>
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="submissionDateTime"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Data Oddania
							           </FormLabel>

							           <Popover>
								           <PopoverTrigger asChild>
									           <FormControl>
										           <Button
											           variant={'outline'}
											           className={cn(
												           'flex pl-3 text-left font-normal',
												           !field.value && 'text-muted-foreground'
											           )}
										           >
											           <CalendarIcon className="mr-2 h-4 w-4 opacity-50"/>

											           {field.value ? (
												           format(field.value, 'PPP')
											           ) : (
												           <span>Pick a date</span>
											           )}
										           </Button>
									           </FormControl>
								           </PopoverTrigger>
								           <PopoverContent className="w-auto p-0" align="start">
									           <Calendar
										           mode="single"
										           selected={field.value}
										           onSelect={field.onChange}
										           initialFocus
									           />
								           </PopoverContent>
							           </Popover>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="keywords"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Słowa Kluczowe
							           </FormLabel>

							           <FormControl>
								           <Input placeholder="Słowa kluczowe..."
								                  {...field}/>
							           </FormControl>

							           <FormDescription>
								           Wpisz słowa kluczowe oddzielone spacją
							           </FormDescription>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>

				<FormField control={form.control}
				           name="file"
				           render={({ field }) => {
					           return (
						           <FormItem>
							           <FormLabel>
								           Plik Pracy (.pdf)
							           </FormLabel>

							           <FormControl>
								           <Input type="file"
								                  accept="application/pdf"
								                  onChange={event => {
									                  const files = event.target.files;

									                  if (!files || files.length === 0) {
										                  return;
									                  }

									                  field.onChange(files[0]);
								                  }}
								           />
							           </FormControl>

							           <FormMessage/>
						           </FormItem>
					           );
				           }}
				/>
			</form>
		</Form>
	);
};
