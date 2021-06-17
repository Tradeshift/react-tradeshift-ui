export type AsideProps = {
	autofocus?: boolean;
	isOpen?: boolean;
	isLoading?: boolean;
	title?: string;
	className?: string;
	loadingMessage?: string;
	onClose?: () => void;
	onClosed?: () => void;
	onOpen?: () => void;
	onOpened?: () => void;
};
export class Aside extends React.Component<AsideProps> {}

export type ButtonProps = {
	busy?: boolean;
};
export const Button: React.FC<React.DetailedHTMLProps<
	React.ButtonHTMLAttributes<HTMLButtonElement>,
	HTMLButtonElement
> &
	ButtonProps>;
