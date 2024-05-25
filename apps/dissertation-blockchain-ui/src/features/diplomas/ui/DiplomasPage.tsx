import { DiplomasTable } from './table/DiplomasTable';
import { useDiplomas } from '../api/useDiplomas';

export const DiplomasPage = () => {
	const diplomas = useDiplomas();

	return (
		<div className="h-full flex flex-col">
			<h2 className="text-2xl font-bold tracking-tight">
				Witam w wyszukiwarce prac dyplomowych!
			</h2>

			<p className="w-1/3 text-muted-foreground">
				Baza danych zawiera prace dyplomowe z różnych kierunków studiów oraz różnych uczelni.
				Warto wspomnieć, że baza danych jest zdecentralizowana, co oznacza, że nie ma jednego
				centralnego serwera, który przechowuje wszystkie prace dyplomowe. Zamiast tego, prace
				dyplomowe są przechowywane w sieci blockchain, co sprawia, że są one bezpieczniejsze i
				trudniejsze do usunięcia.
			</p>

			<DiplomasTable diplomas={diplomas}
			               className="flex-1 min-h-0 pt-4"/>
		</div>
	);
};
