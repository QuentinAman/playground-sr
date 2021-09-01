import React, { useState } from 'react';

import { Button, ClipBoardText, DangerLink, Icon, Input, InputFile, InputPhone, MultiSelectMenu, SelectMenu, Textarea } from '../../atoms'
import { Divider } from '../../molecules';

export const CompanyArea = ({ ...props }) => {

    const [selectedValue, setSelectedValue] = useState({
        text: 'M.',
        option: 'value1',
    });

    const [multiSelectedValues, setMultiSelectedValues] = useState([]);

    const [phone, setPhone] = useState("")

    const [companyInfo, setCompanyInfo] = useState("")


    return (
        <div
            className={`w-full rounded bg-white px-8 py-6 grid gap-6`}
        >
            <div className="flex justify-between">
                <InputFile caution="GIF, JPG, PNG sont autorisés. Max hauteur 100px." color="white" title="Ajouter votre logo"/>
                <Button color="blue">Tutoriel Entreprise</Button>
            </div>

            <div className="">
                <h1 className="text-2xl">espace de votre entreprise</h1>
                <h3 className="text-lg">Personnalisez vos informations.</h3>
            </div>

            <div className="grid grid-cols-3 gap-x-20 gap-y-6 font-semibold">
                <Divider bottom className="whitespace-nowrap">Vous êtes...</Divider>
                <Divider bottom className="col-span-2 whitespace-nowrap">Votre entreprise</Divider>
                <div className="grid gap-3">
                    <div className="grid gap-1 grid-cols-3">
                        <SelectMenu
                            required
                            selected={selectedValue}
                            setSelected={setSelectedValue}
                            values={[
                                { text: 'M.', option: 'value1' },
                                { text: 'MM.', option: 'value2' }
                            ]}
                        />
                        <Input className="col-span-2 h-full" placeholder="Prénom" required/>
                    </div>
                    <Input placeholder="Nom" required/>
                    <Input placeholder="Email" required/>
                    <InputPhone onInput={setPhone} value={phone} required/>
                    <DangerLink className='my-4'>Changer le mot de passe</DangerLink> 
                    <div>
                        <div className="flex items-center pr-4 mb-2">
                            <Icon src="camera" className="mr-2"/>
                            <h3 className="uppercase">Votre acces visio:</h3>
                        </div>
                        <ClipBoardText text='https://visio.speed-recruiting.fr/taf/'/> 
                    </div>
                    <div className="flex items-start pr-4 mb-2 opacity-50" >
                        <Icon src="info" className="mr-2 mt-1" width="12px"/>
                        <div>
                            <h3 className="uppercase">Votre code d’espace:</h3>
                            <h3 className="uppercase">AGRI04</h3>
                        </div>
                    </div> 
                    <Button color="green" width="w-64">Ajouter un collaborateur</Button>
                    <Button width="w-60">liste des collaborateurs</Button>
                </div>
                <div className="grid gap-3">
                    <Input placeholder="Nom de l'entreprise" required/>
                    <Input placeholder="Adresse du site web"/>
                    <Textarea onInput={setCompanyInfo} value={companyInfo} max={1500} required placeholder="Texte informatif sur votre entreprise." height="h-64"></Textarea>
                    <MultiSelectMenu
                        className='pr-1'
                        placeholder="Secteur d'activité"
                        selectedValues={multiSelectedValues}
                        setSelectedValues={setMultiSelectedValues}
                        required
                        values={[
                            { text: 'Banque', option: 'value1' },
                            { text: 'Assurance', option: 'value2' },
                            { text: 'Batiment', option: 'value3' },
                            { text: 'Agriculture', option: 'value4' },
                            { text: 'Informatique', option: 'value5' },
                            { text: 'Commerce', option: 'value6' }
                        ]}
                    />
                </div>
                <div className="">
                        <h3>Ajouter une vidéo</h3>
                        <p className="text-xs font-light">Youtube, vimeo vidéos sont autorisés</p>
                </div>
                <div className="col-span-3">
                    <Divider right ><Button width="w-44" color="green">Mettre à jour</Button></Divider>
                </div>
            </div>
            <div className="mt-20">
                <div className="flex justify-between">
                    <h2>Vos prochains rendez-vous</h2>
                    <div className="grid">
                        <p>2 rendez-vous <span className="font-semibold">confirmés</span></p>
                        <p>2 rendez-vous en <span className="font-semibold">attente</span></p>
                        <p>4 créneaux <span className="font-semibold">indisponibles</span></p>
                        <p>8 créneaux <span className="font-semibold" >disponibles</span></p>
                    </div>
                </div>
                    <Divider>
                        <SelectMenu
                                color="white"
                                selected={selectedValue}
                                setSelected={setSelectedValue}
                                values={[
                                    { text: 'M.', option: 'value1' },
                                ]}
                            />
                        <SelectMenu
                                color="white"
                                selected={selectedValue}
                                setSelected={setSelectedValue}
                                values={[
                                    { text: 'M.', option: 'value1' },
                                ]}
                            />
                    </Divider>
            </div>
        </div>
    );
};
