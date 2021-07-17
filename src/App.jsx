import React from "react";
import { Button, Password, Input, Textarea, InputFile, SlotStatus, InformationTag } from "./components";
import { ComponentsDisplayer } from "./components";

export const App = () => (
  <div>
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

    </ComponentsDisplayer>

    <ComponentsDisplayer title="Select Menu & MultiSelect Menu">

    </ComponentsDisplayer>

    <ComponentsDisplayer title="Tags">

    </ComponentsDisplayer>

    <ComponentsDisplayer title="Tooltips">

    </ComponentsDisplayer>

    <ComponentsDisplayer title="Links">

    </ComponentsDisplayer>
  </div>
)