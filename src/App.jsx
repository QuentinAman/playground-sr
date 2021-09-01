import React, { useState } from 'react';
import {
    Button,
    Password,
    Input,
    Textarea,
    InputFile,
    SlotStatus,
    InformationTag,
    SelectMenu,
    Radio,
    Tooltip,
    Checkbox,
    Link,
    MultiSelectMenu,
    AddJobModal,
    AddDocumentModal,
    EditJobModal,
    AreaCard,
    Slot,
    Meeting,
    ColorCard,
    Divider
} from './components';
import { ComponentsDisplayer } from './components';

export const App = () => {
    const [checkboxs, setCheckboxs] = useState([
        {
            label: 'First Value',
            name: 'value1',
            checked: true,
        },
        {
            label: 'Second Value',
            name: 'value4',
            checked: false,
        },
        {
            label: 'Third Value',
            name: 'value4',
            checked: true,
        },
        {
            label: 'Fourth Value',
            name: 'value4',
            checked: false,
        },
    ]);

    const [selectedValue, setSelectedValue] = useState({
        text: 'First value',
        option: 'value1',
    });

    const [multiSelectedValues, setMultiSelectedValues] = useState([
        { text: 'First value', option: 'value1' },
        { text: 'Seventh value', option: 'value7' },
    ]);

    const handleCheckboxsChange = (index) => (value) => {
        const newCheckboxs = [...checkboxs];
        newCheckboxs[index].checked = value;
        setCheckboxs(newCheckboxs);
    };

    return (
        <div>
            <ComponentsDisplayer columns="1" className="items-center" title="Dividers">
                <Divider/>
                <Divider>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                </Divider>
                <Divider bottom right>
                    <Button>Button 1</Button>
                    <Button>Button 2</Button>
                </Divider>
                <Divider right>
                    <h2>Test</h2>
                </Divider>
            </ComponentsDisplayer>
            <ComponentsDisplayer title="Card">
                <AreaCard
                    title="L’espace recrutement"
                    bgColor="#009EC3"
                    textColor="white"
                    icon="recruitment"
                    subTitle="Vous recherchez un emploi ?"
                    description="Les entreprises proposent des postes sur divers secteurs d’activités. Cet espace est géré par Pôle emploi et les Missions locales."
                    logoOrganizer={['missions-locales.svg', 'pole-emploi.svg']}
                />
                <AreaCard
                    title="L’espace information et orientation"
                    bgColor="#D2D2D2"
                    icon="orientation"
                    subTitle="Vous recherchez l’information ?"
                    description="Rencontrer des professionnels de l’Orientation afin de bénéficier d’informations, d’appui, de conseils pratiques, de propositions personnalisées sur les nombreux dispositifs et mesures emploi formation."
                    logoOrganizer={['occitanie.png']}
                />
                <AreaCard
                    title="L’espace formation"
                    bgColor="#BE0C35"
                    textColor="white"
                    icon="formation"
                    subTitle="Vous recherchez une formation ?"
                    description="Les organismes de formation et établissements scolaires cofinancés par la Région seront présents pour vous présenter l’ensemble de l’offre régionale de formation."
                />
                <AreaCard
                    title="L’espace création d’entreprise"
                    bgColor="#565656"
                    textColor="white"
                    icon="create-company"
                    subTitle="Vous souhaitez créer ou reprendre une entreprise ?"
                    description="Cet espace confidentiel vous permettra de rencontrer les interlocuteurs incontournables pour démarrer votre projet et proposera une sensibilisation à la création d’entreprise."
                />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Modal">
                <AddJobModal />
                <AddDocumentModal />
                <EditJobModal />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Color Cards">
                <ColorCard
                    tag="Agriculture / Esp.Verts"
                    heading="Crédit Agricole du Languedoc"
                >
                    Mec
                </ColorCard>
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Meetings">
                <Meeting status="waiting" />
                <Meeting status="busy" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Slots">
                <Slot
                    status="available"
                    hours="14h00 - 14h15"
                    onClick={() => console.log('available')}
                />
                <Slot status="unavailable" hours="14h00 - 14h15" />
                <Slot
                    status="waiting"
                    hours="14h00 - 14h15"
                    name="Soro Founvarah Bellucci"
                />
                <Slot
                    status="busy"
                    hours="14h00 - 14h15"
                    name="Soro Founvarah Bellucci"
                />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Boutons">
                <Button>S'inscrire</Button>
                <Button color="yellow">S'inscrire</Button>
                <Button color="red">S'inscrire</Button>
                <Button color="green">S'inscrire</Button>
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Inputs">
                <Input />
                <Input placeholder="Texte" />
                <Input required placeholder="Texte" />
                <Password placeholder="Mot de passe" />
                <Password required placeholder="Mot de passe" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Textareas">
                <Textarea />
                <Textarea placeholder="Textarea" />
                <Textarea required placeholder="Textarea" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Input File">
                <InputFile />
                <InputFile text="Importer un document" color="yellow" />
                <InputFile text="Parcourir" color="red" />
                <InputFile text="Sélectionner" color="green" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Information Tags">
                <InformationTag text="Agriculture / Esp.Verts" />
                <InformationTag text="Banque / Assurance" />
                <InformationTag text="BTP / Industrie / Énergie" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Slots Status">
                <SlotStatus status="available" />
                <SlotStatus status="unavailable" />
                <SlotStatus status="waiting" />
                <SlotStatus status="busy" />
                <SlotStatus status="confirmed" />
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Radios & Checkboxs">
                <ComponentsDisplayer title="Radios" className="max-h-max">
                    <Radio
                        values={[
                            { text: 'First value', option: 'value1' },
                            { text: 'Second value', option: 'value2' },
                            { text: 'Third value', option: 'value3' },
                        ]}
                    />
                </ComponentsDisplayer>
                <ComponentsDisplayer title="Checkboxs">
                    <div>
                        {checkboxs.map(({ checked, label, name }, index) => (
                            <Checkbox
                                isChecked={checked}
                                label={label}
                                name={name}
                                setIsChecked={handleCheckboxsChange(index)}
                            />
                        ))}
                    </div>
                </ComponentsDisplayer>
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Select Menu & MultiSelect Menu">
                <ComponentsDisplayer title="Select Menu">
                    <SelectMenu
                        selected={selectedValue}
                        setSelected={setSelectedValue}
                        values={[
                            { text: 'First value', option: 'value1' },
                            { text: 'Second value', option: 'value2' },
                            { text: 'Third value', option: 'value3' },
                            { text: 'Fourth value', option: 'value4' },
                            { text: 'Fifth value', option: 'value5' },
                            { text: 'Sixth value', option: 'value6' },
                            { text: 'Seventh value', option: 'value7' },
                        ]}
                    />
                    <SelectMenu
                        selected={selectedValue}
                        setSelected={setSelectedValue}
                        placeholder
                        values={[
                            { text: 'First value', option: 'value1' },
                            { text: 'Second value', option: 'value2' },
                            { text: 'Third value', option: 'value3' },
                            { text: 'Fourth value', option: 'value4' },
                            { text: 'Fifth value', option: 'value5' },
                            { text: 'Sixth value', option: 'value6' },
                            { text: 'Seventh value', option: 'value7' },
                        ]}
                        required
                    />
                    <SelectMenu
                        placeholder="This is a placeholder"
                        values={[
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value1',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value2',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value3',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value4',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value5',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value6',
                            },
                            {
                                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                                option: 'value7',
                            },
                        ]}
                    />
                </ComponentsDisplayer>
                <ComponentsDisplayer title="MultiSelect Menu">
                    <MultiSelectMenu
                        placeholder="Select one or more values"
                        selectedValues={multiSelectedValues}
                        setSelectedValues={setMultiSelectedValues}
                        values={[
                            { text: 'First value', option: 'value1' },
                            { text: 'Second value', option: 'value2' },
                            { text: 'Third value', option: 'value3' },
                            { text: 'Fourth value', option: 'value4' },
                            { text: 'Fifth value', option: 'value5' },
                            { text: 'Sixth value', option: 'value6' },
                            { text: 'Seventh value', option: 'value7' },
                        ]}
                    />
                </ComponentsDisplayer>
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Tooltips">
                <Tooltip className="justify-self-start">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum. Perspiciatis minima nesciunt
                    dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto
                    libero magni deleniti quod quam consequuntur! Commodi minima
                    excepturi repudiandae velit hic maxime doloremque. Quaerat
                    provident commodi consectetur veniam similique ad earum
                    omnis ipsum saepe, voluptas, hic voluptates pariatur est
                    explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                    mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima
                    sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus
                    quis earum veniam quasi aliquam eligendi, placeat qui
                    corporis!
                </Tooltip>
                <Tooltip>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum. Perspiciatis minima nesciunt
                    dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto
                    libero magni deleniti quod quam consequuntur! Commodi minima
                    excepturi repudiandae velit hic maxime doloremque. Quaerat
                    provident commodi consectetur veniam similique ad earum
                    omnis ipsum saepe, voluptas, hic voluptates pariatur est
                    explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                    mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima
                    sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus
                    quis earum veniam quasi aliquam eligendi, placeat qui
                    corporis!
                </Tooltip>
                <Tooltip className="justify-self-end">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    eaque rerum! Provident similique accusantium nemo autem.
                    Veritatis obcaecati tenetur iure eius earum ut molestias
                    architecto voluptate aliquam nihil, eveniet aliquid culpa
                    officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                    harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
                    quia. Quo neque error repudiandae fuga? Ipsa laudantium
                    molestias eos sapiente officiis modi at sunt excepturi
                    expedita sint? Sed quibusdam recusandae alias error harum
                    maxime adipisci amet laborum. Perspiciatis minima nesciunt
                    dolorem! Officiis iure rerum voluptates a cumque velit
                    quibusdam sed amet tempora. Sit laborum ab, eius fugit
                    doloribus tenetur fugiat, temporibus enim commodi iusto
                    libero magni deleniti quod quam consequuntur! Commodi minima
                    excepturi repudiandae velit hic maxime doloremque. Quaerat
                    provident commodi consectetur veniam similique ad earum
                    omnis ipsum saepe, voluptas, hic voluptates pariatur est
                    explicabo fugiat, dolorum eligendi quam cupiditate excepturi
                    mollitia maiores labore suscipit quas? Nulla, placeat.
                    Voluptatem quaerat non architecto ab laudantium modi minima
                    sunt esse temporibus sint culpa, recusandae aliquam numquam
                    totam ratione voluptas quod exercitationem fuga. Possimus
                    quis earum veniam quasi aliquam eligendi, placeat qui
                    corporis!
                </Tooltip>
            </ComponentsDisplayer>

            <ComponentsDisplayer title="Links">
                <div className="text-sm">
                    This is a blue&nbsp;
                    <Link href="https://www.google.com" color="blue">
                        link
                    </Link>
                </div>
                <div className="text-sm">
                    This is a darkred&nbsp;
                    <Link href="https://www.google.com" color="darkred">
                        link
                    </Link>
                </div>
                <div className="text-sm">
                    This is a lightgray&nbsp;
                    <Link href="https://www.google.com" color="lightgray">
                        link
                    </Link>
                </div>
                <div className="text-sm">
                    This is a gray&nbsp;
                    <Link href="https://www.google.com" color="gray">
                        link
                    </Link>
                </div>
                <Link
                    href="https://www.google.com"
                    color="blue"
                    isUnique={true}
                >
                    Unique link
                </Link>
                <Link
                    href="https://www.google.com"
                    color="darkred"
                    isUnique={true}
                >
                    Unique link
                </Link>
                <Link
                    href="https://www.google.com"
                    color="lightgray"
                    isUnique={true}
                >
                    Unique link
                </Link>
                <Link
                    href="https://www.google.com"
                    color="gray"
                    isUnique={true}
                >
                    Unique link
                </Link>
            </ComponentsDisplayer>
        </div>
    );
};
