import { Diploma } from '@pw-dissertation-blockchain/features/diplomas';

export const mockDiplomas: Diploma[] = [
	new Diploma(
		'Techniki uczenia maszynowego w analizie predykcyjnej',
		'Jan Kowalski',
		'dr Anna Nowak',
		'Politechnika Warszawska',
		'Informatyka',
		'Praca omawia różne techniki uczenia maszynowego stosowane w analizie predykcyjnej, w tym regresję, klasyfikację i grupowanie.',
		'2023-05-01',
		['Uczenie maszynowe', 'Analiza predykcyjna', 'Data Science']
	),
	new Diploma(
		'Systemy energii odnawialnej i ich integracja z siecią',
		'Maria Wiśniewska',
		'dr Michał Zieliński',
		'Uniwersytet Jagielloński',
		'Inżynieria elektryczna',
		'Praca skupia się na integracji źródeł energii odnawialnej z istniejącymi sieciami elektroenergetycznymi i związanych z tym wyzwaniach.',
		'2023-06-15',
		['Energia odnawialna', 'Sieć elektroenergetyczna', 'Inżynieria elektryczna']
	),
	new Diploma(
		'Postępy w obliczeniach kwantowych',
		'Piotr Nowak',
		'dr Ewa Kowalczyk',
		'Uniwersytet Warszawski',
		'Fizyka',
		'Praca bada najnowsze postępy w obliczeniach kwantowych i ich potencjalne zastosowania.',
		'2023-07-10',
		['Obliczenia kwantowe', 'Fizyka', 'Technologia']
	),
	new Diploma(
		'Sztuczna inteligencja w ochronie zdrowia: Szanse i wyzwania',
		'Anna Lewandowska',
		'dr Tomasz Wójcik',
		'Uniwersytet Medyczny w Łodzi',
		'Inżynieria biomedyczna',
		'Praca analizuje zastosowanie sztucznej inteligencji w ochronie zdrowia, koncentrując się na jej korzyściach i potencjalnych wyzwaniach.',
		'2023-05-20',
		['Sztuczna inteligencja', 'Ochrona zdrowia', 'Inżynieria biomedyczna']
	),
	new Diploma(
		'Zmiany klimatyczne i ich wpływ na rolnictwo globalne',
		'Krzysztof Kwiatkowski',
		'dr Andrzej Zieliński',
		'Uniwersytet Przyrodniczy w Poznaniu',
		'Nauki o środowisku',
		'Praca analizuje wpływ zmian klimatycznych na rolnictwo globalne i proponuje zrównoważone rozwiązania.',
		'2023-08-05',
		['Zmiany klimatyczne', 'Rolnictwo', 'Nauki o środowisku']
	),
	new Diploma(
		'Technologia blockchain i jej zastosowania w finansach',
		'Aleksandra Nowakowska',
		'dr Piotr Wiśniewski',
		'SGH Warszawa',
		'Finanse',
		'Praca omawia technologię blockchain i jej różnorodne zastosowania w sektorze finansowym.',
		'2023-09-10',
		['Blockchain', 'Finanse', 'Technologia']
	),
	new Diploma(
		'Robotyka w przemyśle 4.0',
		'Paweł Nowicki',
		'dr Katarzyna Piotrowska',
		'Politechnika Wrocławska',
		'Automatyka i Robotyka',
		'Praca analizuje rolę robotyki w przemyśle 4.0, w tym automatyzację procesów produkcyjnych.',
		'2023-10-01',
		['Robotyka', 'Przemysł 4.0', 'Automatyzacja']
	),
	new Diploma(
		'Społeczno-ekonomiczne skutki pandemii COVID-19',
		'Monika Kamińska',
		'dr Jerzy Nowak',
		'Uniwersytet Ekonomiczny w Krakowie',
		'Ekonomia',
		'Praca bada wpływ pandemii COVID-19 na gospodarki światowe i społeczności lokalne.',
		'2023-04-15',
		['COVID-19', 'Ekonomia', 'Społeczność']
	),
	new Diploma(
		'Techniki big data w analizie rynku',
		'Janusz Piotrowski',
		'dr Agnieszka Kowalska',
		'Politechnika Gdańska',
		'Zarządzanie',
		'Praca omawia zastosowanie technik big data w analizie rynku, w tym analizy popytu i podaży.',
		'2023-03-25',
		['Big Data', 'Analiza rynku', 'Zarządzanie']
	),
	new Diploma(
		'Bezpieczeństwo w sieciach komputerowych',
		'Barbara Nowak',
		'dr Krzysztof Wysocki',
		'Politechnika Poznańska',
		'Informatyka',
		'Praca analizuje zagrożenia związane z bezpieczeństwem w sieciach komputerowych i proponuje środki ochrony.',
		'2023-07-20',
		['Bezpieczeństwo', 'Sieci komputerowe', 'Informatyka']
	),
	new Diploma(
		'Rozwój technologii samochodów autonomicznych',
		'Tomasz Lewicki',
		'dr Zofia Jabłońska',
		'Politechnika Śląska',
		'Inżynieria mechaniczna',
		'Praca bada rozwój technologii samochodów autonomicznych i ich wpływ na przyszłość transportu.',
		'2023-05-30',
		['Samochody autonomiczne', 'Transport', 'Inżynieria mechaniczna']
	),
	new Diploma(
		'Nowe metody w terapii genowej',
		'Karolina Kowal',
		'dr Maciej Bielecki',
		'Uniwersytet Medyczny w Białymstoku',
		'Biotechnologia',
		'Praca analizuje najnowsze metody stosowane w terapii genowej i ich potencjalne zastosowania kliniczne.',
		'2023-06-25',
		['Terapia genowa', 'Biotechnologia', 'Medycyna']
	),
	new Diploma(
		'Zastosowanie dronów w monitoringu środowiskowym',
		'Adam Wiśniewski',
		'dr Łukasz Malinowski',
		'Uniwersytet Przyrodniczy we Wrocławiu',
		'Nauki o środowisku',
		'Praca bada zastosowanie dronów w monitoringu środowiskowym, w tym w ocenie jakości powietrza i wody.',
		'2023-07-05',
		['Drony', 'Monitoring środowiskowy', 'Nauki o środowisku']
	),
	new Diploma(
		'Inteligentne systemy transportowe w miastach przyszłości',
		'Joanna Zielińska',
		'dr Bartosz Nowak',
		'Politechnika Łódzka',
		'Inżynieria lądowa',
		'Praca analizuje rozwój inteligentnych systemów transportowych i ich rolę w miastach przyszłości.',
		'2023-08-15',
		['Inteligentne systemy', 'Transport', 'Inżynieria lądowa']
	),
	new Diploma(
		'Analiza rynku nieruchomości w Polsce',
		'Janusz Malinowski',
		'dr Monika Kowalczyk',
		'Uniwersytet Gdański',
		'Ekonomia',
		'Praca bada trendy na rynku nieruchomości w Polsce i proponuje prognozy na przyszłość.',
		'2023-09-20',
		['Rynek nieruchomości', 'Ekonomia', 'Polska']
	),
	new Diploma(
		'Zastosowanie technologii VR w edukacji',
		'Ewa Wójcik',
		'dr Tomasz Zieliński',
		'Uniwersytet Wrocławski',
		'Pedagogika',
		'Praca analizuje zastosowanie technologii wirtualnej rzeczywistości w procesie edukacyjnym i jej wpływ na efektywność nauczania.',
		'2023-06-10',
		['VR', 'Edukacja', 'Technologia']
	),
	new Diploma(
		'Rozwój aplikacji mobilnych z użyciem sztucznej inteligencji',
		'Mateusz Nowicki',
		'dr Jakub Lewandowski',
		'Politechnika Krakowska',
		'Informatyka',
		'Praca bada rozwój aplikacji mobilnych z wykorzystaniem sztucznej inteligencji, w tym analizy obrazów i rozpoznawania mowy.',
		'2023-05-18',
		['Aplikacje mobilne', 'Sztuczna inteligencja', 'Informatyka']
	),
	new Diploma(
		'Wpływ mediów społecznościowych na zachowania konsumentów',
		'Anna Piotrowska',
		'dr Łukasz Nowak',
		'Uniwersytet Warszawski',
		'Marketing',
		'Praca analizuje wpływ mediów społecznościowych na decyzje zakupowe konsumentów i strategie marketingowe.',
		'2023-07-12',
		['Media społecznościowe', 'Zachowania konsumentów', 'Marketing']
	),
	new Diploma(
		'Sztuczna inteligencja w diagnostyce medycznej',
		'Magdalena Kwiatkowska',
		'dr Krzysztof Lewandowski',
		'Uniwersytet Medyczny w Lublinie',
		'Medycyna',
		'Praca bada zastosowanie sztucznej inteligencji w diagnostyce medycznej, w tym w analizie obrazów medycznych i diagnozowaniu chorób.',
		'2023-06-22',
		['Sztuczna inteligencja', 'Diagnostyka medyczna', 'Medycyna']
	),
	new Diploma(
		'Zrównoważony rozwój miast: Wyzwania i perspektywy',
		'Rafał Zieliński',
		'dr Agnieszka Wiśniewska',
		'Politechnika Rzeszowska',
		'Architektura',
		'Praca analizuje wyzwania związane ze zrównoważonym rozwojem miast oraz przedstawia możliwe perspektywy na przyszłość.',
		'2023-08-28',
		['Zrównoważony rozwój', 'Miasta', 'Architektura']
	)
];
