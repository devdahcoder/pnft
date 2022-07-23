import React from 'react';
import { getDashboardLayout } from '../components/Layouts/DashboardLayout';


type Props = {}

const IndexPage  = (props: Props) => {
    return (
      <div className="text-black font-inter">Index is the main page now</div>
    )
}

IndexPage.getLayout = getDashboardLayout;

export default IndexPage;