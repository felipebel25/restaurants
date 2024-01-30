import Head from "next/head"

import { TermsConditions } from "@components/organisms/Terms/TermsConditions"
import MainLayout from "@components/templates/MainLayout/MainLayout"

const terms = () => {
    return (
        <>
            <Head>
                <title>Terms And Conditions | Eatsy</title>
            </Head>
            <MainLayout>
                <TermsConditions />
            </MainLayout>
        </>
    )
}
export default terms