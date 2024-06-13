import React, { PropsWithChildren } from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";

interface IModalProps {
	isOpen: boolean;
	handleClose: () => void;
}
const Modal: React.FC<PropsWithChildren<IModalProps>> = ({
	children,
	isOpen,
	handleClose,
}) => {
	return (
		<Dialog open={isOpen} onClose={handleClose}>
			<DialogContent>{children}</DialogContent>
			<DialogActions>
				<Button onClick={handleClose}>Disagree</Button>
				<Button onClick={handleClose} autoFocus>
					Agree
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default Modal;
