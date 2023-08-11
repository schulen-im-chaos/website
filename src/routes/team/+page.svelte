<script>
	import HeadingMain from "../../components/basic/HeadingMain.svelte";
	import MemberRow from "../../components/basic/MemberRow.svelte";
	import Link from "../../components/basic/Link.svelte";
	import ParagraphDefault from "../../components/basic/ParagraphDefault.svelte";
</script>

<svelte:head>
	<title>Unser Team</title>
	<meta
		name="description"
		content="Wir sind ein Team aus sechs Personen, welche aus den verschiedenen Teilen Deutschlands kommen. Hier stellen wir uns kurz vor."
	/>
</svelte:head>

<HeadingMain>Wer sind wir?</HeadingMain>

<ParagraphDefault>
	Wir sind ein Team aus sechs Personen, welche aus den verschiedensten Teilen Deutschlands kommen.
</ParagraphDefault>

<ParagraphDefault>Hier stellen wir uns kurz vor:</ParagraphDefault>

<MemberRow name="Nico / FunKey54" imgname="nico.png">
	Mein Name ist Nico, oder auch FunKey54. Ich hatte die Idee, dieses Projekt zu gründen, und kümmere
	mich hauptsächlich um die Öffentlichkeitsarbeit und den Support, bin aber auch sonst überall zur
	Stelle, wo gerade jemand gebraucht wird. Zu meiner Person: Ich zocke für mein Leben gerne und
	interessiere mich für Landwirtschaft und andere große Maschinen. Als Hobby gehe ich gerne
	Fahrradfahren oder mache selten einige YouTube-Videos auf meinem <Link
		href="https://www.youtube.com/channel/UCFmpb9lyZlntgGdGc5hhmvQ"
		external>Kanal</Link
	>.
</MemberRow>

<MemberRow imgPosition="right" name="Niklas / OttigamerHD" imgname="niklas.png">
	Ich bin Niklas, oder auch OttigamerHD. Ich habe mich dem Projekt schon am Anfang angeschlossen
	gehabt. Was ich mache? Eigentlich bin ich für alles da, hauptsächlich kümmere ich mich aber um die
	Öffentlichkeitsarbeit (Instagram & Discord). Zu mir: Ich zocke ab und zu wenn es die Zeit erlaubt
	und ich Lust habe, ansonsten spiele ich noch Handball und fahre Motorrad (<Link
		href="https://www.instagram.com/nikls.moto/"
		external>Insta:@nikls.moto</Link
	>). Selten kommen auch mal Videos auf meinem
	<Link href="https://www.youtube.com/@ottigamerhd" external>YouTube-Kanal</Link>.
</MemberRow>

<MemberRow name="Philipp / Klumpi" imgname="nopicture.png">
	Ich bin Philipp, oder auch Klumpi. Ich bin durch Nico von Anfang an in das Projekt eingebunden
	worden und kümmere mich dabei hauptsächlich um den Discord Server und alles was damit zu tun hat.
	Ansonsten spiele ich Fußball, zocke für mein Leben gern, fahre Motorrad und bin in der Feuerwehr.
</MemberRow>

<MemberRow imgPosition="right" name="Alex / alexcoder04" imgname="alex.png">
	Ich bin Alex, im Internet auch <Link href="https://github.com/alexcoder04" external
		>@alexcoder04</Link
	>. Interessiere mich fürs Programmieren und arbeite deshalb an unserer Webseite.
	Mathe/Physik/Informatik-LKs, mache auch Latein und Englisch, teile gerne mein Wissen in diesen
	Fächern und generell zur Oberstufe; in der Freizeit mache ich gern Quatsch mit Tech oder gehe raus
	zum Spazieren oder Radfahren. Linux-User. Großstadtkind.
</MemberRow>

<MemberRow name="Nils / nwrenger / nilch" imgname="nils.png">
	Ich bin Nils Wrenger, auch bekannt als "nilch" auf Discord und "nwrenger" auf <Link
		href="https://github.com/nwrenger"
		external>Github</Link
	>. Ich bin Teil des Projektteams und arbeite hauptsächlich am Frontend unserer Webseite in
	Zusammenarbeit mit meinem Kollegen Alex. Neben meiner Leidenschaft für Technik und Programmieren
	habe ich noch andere Interessen. In meiner Freizeit spiele ich gerne meine Musikinstrumente, das
	Saxophon und die Klarinette, und lasse meiner kreativen Seite freien Lauf. Die Kombination aus
	musischer Ausdrucksform und technischer Herausforderung fasziniert mich.
</MemberRow>

<MemberRow imgPosition="right" name="Linus / SiliconSniffer" imgname="linus.png">
	Hi! Ich bin Linus und auf Discord als "SiliconSniffer" unterwegs. Nico hatte mich ins Projekt
	eingeladen, wobei ich vor allem Alex zu Seite stehe. Ich beschäftige mich viel mit allem rund um
	IT, Computer und Linux. Ansonsten liebe ich es, mit meiner Kamera unterwegs zu sein und mich
	draußen aufzuhalten.
</MemberRow>

<MemberRow name="Lukas / RED_Fox703" imgname="lukas.png">
	Mein Name ist Lukas. Auf Social Media aber eher unter dem Namen Red_Fox703 zu finden. Ich bin ein
	Leidenschaftlicher Gearhead und ein absoluter IT-Nerd. Ich bin sehr direkt und auch in vielen
	Sachen sehr offen über Dinge, wie zb. Meine Orientierung zu sprechen. Ich mache Social Media (bin
	auf Instagram inzwischen recht groß geworden), halte mich aber aus den Social-Media-Kanälen von
	Schulen im Chaos raus. Ich hoste Teile der IT-Infrastruktur (wenn was schiefläuft, liegt's sehr
	wahrscheinlich an mir) Hier sieht man auch noch ein paar meiner Hobby Projekte: <Link
		href="http://social.redfox703.de/"
		external>[Klick mich]</Link
	>.
</MemberRow>
