import React from 'react';
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
} from './components';
import { ComponentsDisplayer } from './components';

export const App = () => (
    <div className="pb-96">
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
            <InputFile color="yellow" />
            <InputFile color="red" />
            <InputFile color="green" />
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
            <ComponentsDisplayer title="Radios">
                <Radio
                    values={[
                        { text: 'First value', option: 'value1' },
                        { text: 'Second value', option: 'value2' },
                        { text: 'Third value', option: 'value3' },
                    ]}
                />
            </ComponentsDisplayer>
            <ComponentsDisplayer title="Checkboxs"></ComponentsDisplayer>
        </ComponentsDisplayer>

        <ComponentsDisplayer title="Select Menu & MultiSelect Menu">
            <ComponentsDisplayer title="Select Menu">
                <SelectMenu
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
            <ComponentsDisplayer title="MultiSelect Menu"></ComponentsDisplayer>
        </ComponentsDisplayer>

        <ComponentsDisplayer title="Tags"></ComponentsDisplayer>

        <ComponentsDisplayer title="Tooltips">
            <Tooltip className="justify-self-start">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
            </Tooltip>
            <Tooltip>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
            </Tooltip>
            <Tooltip className="justify-self-end">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur voluptatum laborum numquam blanditiis harum
                quisquam eius sed odit fugiat iusto fuga praesentium optio,
                eaque rerum! Provident similique accusantium nemo autem.
                Veritatis obcaecati tenetur iure eius earum ut molestias
                architecto voluptate aliquam nihil, eveniet aliquid culpa
                officia aut! Impedit sit sunt quaerat, odit, tenetur error,
                harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia.
                Quo neque error repudiandae fuga? Ipsa laudantium molestias eos
                sapiente officiis modi at sunt excepturi expedita sint? Sed
                quibusdam recusandae alias error harum maxime adipisci amet
                laborum. Perspiciatis minima nesciunt dolorem! Officiis iure
                rerum voluptates a cumque velit quibusdam sed amet tempora. Sit
                laborum ab, eius fugit doloribus tenetur fugiat, temporibus enim
                commodi iusto libero magni deleniti quod quam consequuntur!
                Commodi minima excepturi repudiandae velit hic maxime
                doloremque. Quaerat provident commodi consectetur veniam
                similique ad earum omnis ipsum saepe, voluptas, hic voluptates
                pariatur est explicabo fugiat, dolorum eligendi quam cupiditate
                excepturi mollitia maiores labore suscipit quas? Nulla, placeat.
                Voluptatem quaerat non architecto ab laudantium modi minima sunt
                esse temporibus sint culpa, recusandae aliquam numquam totam
                ratione voluptas quod exercitationem fuga. Possimus quis earum
                veniam quasi aliquam eligendi, placeat qui corporis!
            </Tooltip>
        </ComponentsDisplayer>

        <ComponentsDisplayer title="Links"></ComponentsDisplayer>
    </div>
);
