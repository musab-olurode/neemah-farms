import '../../styles/globals.scss';
import type { AppProps } from 'next/app';
import localFont from '@next/font/local';
import clsx from 'clsx';

const spaceGrotesk = localFont({
	src: '../../public/fonts/space-grotesk/SpaceGrotesk-VariableFont_wght.ttf',
	variable: '--font-space-grotesk',
});
const aeonik = localFont({
	src: '../../public/fonts/aeonik/Aeonik-Regular.otf',
	weight: '400',
	variable: '--font-aeonik',
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={clsx(spaceGrotesk.variable, aeonik.variable)}>
			<Component {...pageProps} />
		</main>
	);
}
