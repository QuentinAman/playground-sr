import React, { useState } from 'react';

import { Button, ClipBoardText, DangerLink, Icon, Input, InputFile, InputList, InputPhone, MultiSelectMenu, SelectMenu, Textarea, ListElement } from '../../atoms'
import { Divider, Slot } from '../../molecules';

export const CompanyArea = ({ ...props }) => {

    const [selectedCivility, setSelectedCivility] = useState({
        text: 'M.',
        option: 'value1',
    });

    const [selectedFullname, setSelectedFullname] = useState({
        text: 'M. Sébastien Nencioni',
        option: 'value1',
    })

    const [selectedDate, setSelectedDate] = useState({
        text: 'a 10.06.2021 - Jeudi',
        option: 'value1',
    })

    const [listInputVideo, setListInputVideo] = useState([]);

    const [listInputContract, setListInputContract] = useState([]);

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
                            selected={selectedCivility}
                            setSelected={setSelectedCivility}
                            values={[
                                { text: 'M.', option: 'value1' },
                                { text: 'MM.', option: 'value2' }
                            ]}
                        />
                        <Input className="col-span-2 h-full" placeholder="Prénom" required/>
                    </div>
                    <Input className="h-full" placeholder="Nom" required/>
                    <Input className="h-full" placeholder="Email" required/>
                    <InputPhone onInput={setPhone} value={phone} required/>
                    <DangerLink className='my-4'>Changer le mot de passe</DangerLink> 
                    <div>
                        <div className="flex items-center pr-4 mb-1">
                            <Icon src="camera" className="mr-2"/>
                            <h4 className="uppercase text-sm">Votre acces visio:</h4>
                        </div>
                        <ClipBoardText text='https://visio.speed-recruiting.fr/taf/'/> 
                    </div>
                    <div className="flex items-start pr-4 mb-2 opacity-50" >
                        <Icon src="info" className="mr-2 mt-1" width="12px"/>
                        <div>
                            <h4 className="uppercase text-sm">Votre code d’espace:</h4>
                            <h4 className="uppercase text-sm">AGRI04</h4>
                        </div>
                    </div> 
                    <Button color="green" width="w-64">Ajouter un collaborateur</Button>
                    <Button width="w-60">liste des collaborateurs</Button>
                </div>
                <div className="grid gap-4">
                    <Input  placeholder="Nom de l'entreprise" required/>
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
                    <div>
                        <h3 className="mb-2">Contrats proposés</h3>
                        <InputList
                            type="RemovableTag"
                            placeholder="Ajouter un contrat"
                            selectedValues={listInputContract}
                            setSelectedValues={setListInputContract}
                        />
                    </div>
                </div>
                <div className="grid gap-10">
                    <div className="grid gap-1">
                        <h3>Ajouter une vidéo</h3>
                        <p className="text-xs font-light mb-1">Youtube, vimeo vidéos sont autorisés</p>
                        <InputList
                            type="ListElement"
                            selectedValues={listInputVideo}
                            setSelectedValues={setListInputVideo}
                            placeholder="Ajouter un lien vidéo"
                        />
                    </div>
                    <div className="grid gap-1">
                        <h3>Ajouter un document</h3>
                        <p className="text-xs font-light mb-1">Seulement les PDF sont autorisés.</p>
                        <ListElement
                            content={{
                                text: 'A propos de nous',
                                value: 'https://www.google.com',
                            }}
                        />                
                        <ListElement
                            content={{
                                text: 'Mentions legales',
                                value: 'https://www.google.com',
                            }}
                        />
                        <Button className="mt-2">Déposer un document</Button>
                    </div>
                    <div className="grid gap-1">
                        <h3 className="mb-1">Ajouter une vidéo</h3>
                        <ListElement
                            content={{
                                text: 'Développeur C# .net',
                                value: 'https://www.google.com',
                            }}
                        />
                        <Button className="mt-2">Ajouter une offre</Button>
                    </div>
                </div>
                <div className="col-span-3">
                    <Divider right ><Button width="w-44" color="green">Mettre à jour</Button></Divider>
                </div>
            </div>
            <div className="mt-20 grid gap-4">
                <div className="flex justify-between">
                    <h2 className="text-xl">Vos prochains rendez-vous</h2>
                    <div className="grid">
                        <p className="text-sm">2 rendez-vous <span className="font-semibold text-sm">confirmés</span></p>
                        <p className="text-sm">2 rendez-vous <span className="font-semibold text-sm">en attente</span></p>
                        <p className="text-sm">4 créneaux <span className="font-semibold text-sm">indisponibles</span></p>
                        <p className="text-sm">8 créneaux <span className="font-semibold text-sm" >disponibles</span></p>
                    </div>
                </div>
                    <Divider>
                        <SelectMenu
                                color="white"
                                width="w-max"
                                className="whitespace-nowrap"
                                selected={selectedFullname}
                                setSelected={setSelectedFullname}
                                values={[
                                    { text: 'M. Sébastien Nencioni', option: 'value1' },
                                ]}
                            />
                        <SelectMenu
                                color="white"
                                width="w-max"
                                className="whitespace-nowrap"
                                selected={selectedDate}
                                setSelected={setSelectedDate}
                                values={[
                                    { text: 'a 10.06.2021 - Jeudi', option: 'value1' },
                                ]}
                            />
                    </Divider>
                    <div className="grid grid-cols-auto-fit-1 gap-4">
                            <Slot status="available" hours="14h00 - 14h15" onClick={() => console.log('available')}/>
                            <Slot status="waiting" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('waiting')}/>
                            <Slot status="available" hours="14h00 - 14h15" onClick={() => console.log('available')}/>
                            <Slot status="unavailable" hours="14h00 - 14h15" onClick={() => console.log('unavailable')}/>
                            <Slot status="unavailable" hours="14h00 - 14h15" onClick={() => console.log('unavailable')}/>
                            <Slot status="busy" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('busy')}/>
                            <Slot status="busy" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('busy')}/>
                            <Slot status="waiting" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('waiting')}/>
                            <Slot status="available" hours="14h00 - 14h15" onClick={() => console.log('available')}/>
                            <Slot status="waiting" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('waiting')}/>
                            <Slot status="available" hours="14h00 - 14h15" onClick={() => console.log('available')}/>
                            <Slot status="unavailable" hours="14h00 - 14h15" onClick={() => console.log('unavailable')}/>
                            <Slot status="unavailable" hours="14h00 - 14h15" onClick={() => console.log('unavailable')}/>
                            <Slot status="busy" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('busy')}/>
                            <Slot status="busy" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('busy')}/>
                            <Slot status="waiting" name="Soro Founvarah Bellucci" hours="14h00 - 14h15" onClick={() => console.log('waiting')}/>
                    </div>
                    <div className="mt-10 flex flex-row-reverse">
                        <Button>Liste des participants</Button>
                    </div>
                    <div className="mt-4">
                        <DangerLink>Supprimer mon compte</DangerLink>
                    </div>
            </div>
        </div>
    );
};
