import React from 'react';
import { Button, Input, InputFile, Modal } from '../../atoms';

export const AddDocumentModal = () => {
    return (
        <Modal title="Ajouter un document" className="text-center">
            <Input className="mb-3" required placeholder="Nom de document" />
            <Input className="mb-3" placeholder="Entrez un lien" />
            <InputFile text="Ou importer un PDF" className="w-full mb-4" />
            <Button className="mr-0" color="green">
                Envoyer
            </Button>
        </Modal>
    );
};
