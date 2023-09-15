Zadanie 1 - biblioteka SimpleLightbox Wykonuj to zadanie w plikach
01-gallery.html i 01-gallery.js. Możemy rozbić je na kilka mniejszych zadań:

Dodaj bibliotekę SimpleLightbox jako zależność projektu używając npm (link do
CDN z Twojej poprzedniej pracy domowej nie jest już potrzebny). Użyj swojego
kodu JavaScript z poprzedniej pracy domowej, ale zrefaktoryzuj go uwzględniając
to, że biblioteka została zainstalowana przez npm (składnia import/export). Aby
umieścić kod CSS biblioteki w projekcie, należy dodać jeszcze jeden import,
oprócz tego opisanego w dokumentacji.

// Opisany w dokumentacji import SimpleLightbox from "simplelightbox"; //
Dodatkowy import stylów import "simplelightbox/dist/simple-lightbox.min.css";

Zadanie 2 - odtwarzacz wideo W HTML znajduje się <iframe> z wideo na platformie
Vimeo. Napisz skrypt, który będzie zapisywał aktualny czas odtwarzania wideo w
local storage i podczas przeładowywania strony, kontynuuje odtwarzanie wideo od
danego momentu.

Wykonuj to zadanie w plikach 02-video.html i 02-video.js. Rozbij je na kilka
pod-zadań:

Zapoznaj się z dokumentacją biblioteki odtwarzacza Vimeo. Dodaj bibliotekę jako
zależność projektu poprzez npm. Zainicjalizuj odtwarzacz w pliku skryptu tak,
jak opisano w sekcji pre-existing player, ale weź pod uwagę to, że odtwarzacz
dodano jako pakiet npm, a nie poprzez CDN. Zbadaj dokumentację metody on() i
zacznij śledzić zdarzenie timeupdate - czyli aktualizacje czasu odtwarzania.
Zapisuj czas odtwarzania w local storage. Niech kluczem w storage będzie
"videoplayer-current-time". Przy przeładowywania strony używaj metody
setCurrentTime() aby wznowić odtwarzanie od zapisanego momentu. Dodaj do
projektu bibliotekę lodash.throttle i zrób tak, aby czas odtwarzania
aktualizował się w storage nie częściej niż raz na sekundę.

Zadanie 3 - formularz kontaktowy W HTML znajduje się znacznik formularza. Napisz
skrypt, który będzie zapisywał wartości pól w local storage, gdy użytkownik coś
w nie wpisze.

Wykonuj to zadanie w plikach 03-feedback.html i 03-feedback.js. Rozbij je na
kilka pod-zadań:

Śledź w formularzu zdarzenie input, i za każdym razem zapisuj w local storage
obiekt z polami email i message, w których przechowywane są aktualne wartości
pól formularza. Niech kluczem do tych danych w storage będzie
"feedback-form-state". Podczas przeładowywania strony sprawdzaj stan storage i
jeśli są tam zapisane dane, wypełniaj nimi pola formularza. W przeciwnym wypadku
pola powinny być puste. Po wysłaniu formularza wyczyść storage i pola
formularza, a także wyloguj obiekt z polami email, message i ich aktualnymi
wartościami do konsoli. Zrób tak, aby storage aktualizował się nie częściej niż
raz na 500 milisekund. Aby to zrobić, użyj metody biblioteki lodash.throttle
(dodaj ją do projektu).
