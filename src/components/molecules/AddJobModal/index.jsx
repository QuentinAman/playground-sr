import React from 'react';
import { Modal, Input, InputFile, Button, Textarea } from '../../atoms';

export const AddJobModal = () => {
    return (
        <Modal title="Ajouter un poste" className="text-center">
            <Input required placeholder="Nom du poste" className="mb-3" />
            <Textarea placeholder="Ajouter une définition de poste" />
            <Input
                placeholder="Ou entrez un lien de definitıon"
                className="mb-3 mt-3"
            />
            <InputFile text="Ou importer une définition" className="mb-4" />
            <Button color="green">Envoyer</Button>
        </Modal>
    );
};
