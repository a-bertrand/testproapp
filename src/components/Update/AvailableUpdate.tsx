import { Layout, Text, CheckBox } from "@ui-kitten/components";
import {UpdateDescription, UpdateDescriptionProps } from "./UpdateDescription"
import React from "react";


interface AvailableUpdateProps extends  UpdateDescriptionProps {}


export default class AvailableUpdate extends React.Component<AvailableUpdateProps>{
    render() {
        const [checked, setChecked] = React.useState(false);
        return (
            <Layout>
                <CheckBox
                    checked={checked}
                    onChange={nextChecked => setChecked(nextChecked)}>
                    {`Checked: ${checked}`}
                </CheckBox>
                <UpdateDescription {...this.props} />
            </Layout> 
        )
    }
}