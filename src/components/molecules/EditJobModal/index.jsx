import React from 'react';
import { Modal, Textarea, Input, Button } from '../../atoms';

export const EditJobModal = () => {
    return (
        <Modal title="Modifier votre poste" className="text-center">
            <Input placeholder="Poste à modifer" className="mb-3" />
            <Textarea placeholder="Écrivez une définition de poste" />
            <Input
                placeholder="Ou entrez un lıen de defınıtıon"
                className="mt-3 mb-4"
            ></Input>
            <Button color="green">Sauvegarder</Button>
        </Modal>
    );
};
