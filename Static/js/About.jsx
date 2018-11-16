import React from "react";

export default class About extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="about">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus aliquet est sed orci suscipit, sit amet venenatis odio tincidunt. Vivamus non gravida ex. Vestibulum vitae nunc condimentum, mollis dolor non, molestie tortor. Fusce sit amet ante quis purus malesuada sagittis. Nulla sed iaculis nibh. Cras feugiat at ligula at volutpat. Duis ullamcorper nunc eu gravida facilisis. Curabitur augue sem, pulvinar eu tempus at, condimentum ac libero. Ut nec diam vel neque sollicitudin cursus. Proin vitae neque aliquam, laoreet ex vel, semper lectus. Integer pharetra enim justo, in tincidunt quam ullamcorper sed. Suspendisse potenti. In finibus, ligula quis dignissim consequat, tellus.</p>
                <img src="../dist/css/img/logo-2.png"/>
            </div>
        );
    }
}