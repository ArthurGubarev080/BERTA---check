import React, { Component } from "react";
import { Steps } from "antd";

const { Step } = Steps;
export class secondStep extends Component {
    static propTypes = {};

    render() {
        return (
            <div>
                <Steps size="medium" current={1}>
                    <Step title="Finished" />
                    <Step title="In Progress" />
                    <Step title="Waiting" />
                </Steps>
                ,
            </div>
        );
    }
}

export default secondStep;
