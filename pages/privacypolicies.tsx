import Head from "next/head";

import { PrivacyPolicies } from "@components/organisms/Privacy/PrivacyPolicies";
import MainLayout from "@components/templates/MainLayout/MainLayout";

const privacypolicies = () => {
    return (
        <>
            <Head>
                <title>Privacy Policies | Eatsy</title>
            </Head>
            <MainLayout>
                <PrivacyPolicies />
            </MainLayout>
        </>
    )
}
export default privacypolicies;