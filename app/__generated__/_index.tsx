/* eslint-disable */
/* This is a auto generated file for building the project */ 

import { type ReactNode, useState } from "react";
import type { PageData } from "~/routes/_index";
import type { Asset, ImageAsset, SiteMeta } from "@webstudio-is/sdk";
import { Body as Body, Link as Link, Form as Form } from "@webstudio-is/sdk-components-react-remix";
import { Box as Box, Heading as Heading, Text as Text, Paragraph as Paragraph, Image as Image, Bold as Bold, HtmlEmbed as HtmlEmbed, Label as Label, Input as Input, Button as Button, Fragment as Fragment, Slot as Slot, Textarea as Textarea, Span as Span } from "@webstudio-is/sdk-components-react";
import { Accordion as Accordion, AccordionItem as AccordionItem, AccordionHeader as AccordionHeader, AccordionTrigger as AccordionTrigger, AccordionContent as AccordionContent } from "@webstudio-is/sdk-components-react-radix";

export const fontAssets: Asset[] = [{"id":"fc5457a0-9130-4f63-99c1-3cbe273d0691","name":"DMSans-VariableFont_opsz_wght_024TU8xKTl_JWSQ8iEN-W.ttf","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":238984,"type":"font","createdAt":"2023-08-30T20:58:14.976Z","format":"ttf","meta":{"family":"DM Sans","variationAxes":{"opsz":{"name":"Optical size","min":9,"default":9,"max":40},"wght":{"name":"Weight","min":100,"default":400,"max":1000}}}}]
export const imageAssets: ImageAsset[] = [{"id":"2119a892-74b9-445f-826f-5dfd14b3d9f1","name":"josh-rocklage-HAAsKeZbHAc-unsplash_NE1qfBY6TNANGiAFuXiKA.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":1074399,"type":"image","format":"jpeg","createdAt":"2023-09-18T18:23:56.511Z","meta":{"width":3240,"height":2160}},{"id":"973a83e0-11b9-491a-b292-b7583c2fac66","name":"rocco-dipoppa-_uDj_lyPVpA-unsplash_KeTV-4SQ04K-NYYOPSopk.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":536800,"type":"image","format":"jpeg","createdAt":"2023-08-31T19:50:19.787Z","meta":{"width":1920,"height":1216}},{"id":"b96fe4c2-52d4-41a3-b196-8486d9cba1df","name":"Twitter_Icon_White_BVEhCDE-LW9kXpzM-xuKP.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":845,"type":"image","format":"svg","createdAt":"2023-08-31T05:27:48.409Z","meta":{"width":16,"height":13}},{"id":"06432619-c391-4d15-a0e3-1cfbd5bcca9d","name":"LinkedIn_Icon_White_rDiQBCYd17Isq8l8CP2Nn.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":749,"type":"image","format":"svg","createdAt":"2023-08-31T05:27:48.406Z","meta":{"width":15,"height":15}},{"id":"3403ce87-d9b6-4f0f-bd00-ac891f4caf2a","name":"Facebook_Icon_White_GwMppwRTnN0knd6Pgzgcd.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":529,"type":"image","format":"svg","createdAt":"2023-08-31T05:27:48.335Z","meta":{"width":9,"height":18}},{"id":"2578e5f8-b137-4c82-a29a-20fdad5fd5e1","name":"Pinterest_Icon_White_Y5L0cQG-4f3vBZY-4e2uU.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":1213,"type":"image","format":"svg","createdAt":"2023-08-31T05:27:48.328Z","meta":{"width":13,"height":17}},{"id":"1a440c67-b3af-4ce6-85a0-fdc0c6e6a9f2","name":"leo-wieling-bG8U3kaZltE-unsplash_0XfLoiqtZtJeO11OGIl1Q.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":278983,"type":"image","format":"jpeg","createdAt":"2023-08-31T01:43:26.453Z","meta":{"width":1280,"height":1920}},{"id":"bf6bd9fa-cc07-4a87-bb33-b68f0c9618bf","name":"luke-thornton-JNl7o-Mj2cc-unsplash_0qWTlSv7B4rmUKvB_Y1cl.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":613792,"type":"image","format":"jpeg","createdAt":"2023-08-31T01:26:25.342Z","meta":{"width":1920,"height":1280}},{"id":"4cab4c9d-3c3f-4a16-855d-bb7fb25ff0b4","name":"kyle-smith-x0dtRYZovLo-unsplash_BahcweLIUAdV9LkMyFU6v.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":650871,"type":"image","format":"jpeg","createdAt":"2023-08-31T01:26:25.273Z","meta":{"width":1280,"height":1920}},{"id":"e753cac6-d978-4b4c-9c52-155e2367ffae","name":"alex-wong-RIo45CycGCs-unsplash_5z3vcfZKOncrqJsrUk0Dg.jpg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":520576,"type":"image","format":"jpeg","createdAt":"2023-08-31T01:26:25.160Z","meta":{"width":1920,"height":1280}},{"id":"624f0661-c4de-4504-b7c5-e534e38472b6","name":"Facebook_1bZ8k5eTlmlCbZ8bVdC_D.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":535,"type":"image","format":"svg","createdAt":"2023-08-30T06:01:39.102Z","meta":{"width":8,"height":18}},{"id":"b7ab152f-0263-45b3-a0af-84196c2d9be6","name":"Twitter_8ER4uHstrL3pVvvllcY5i.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":865,"type":"image","format":"svg","createdAt":"2023-08-30T06:01:39.096Z","meta":{"width":16,"height":13}},{"id":"fb7c20d8-f647-49f6-a811-a43bac5c7077","name":"LinkedIn_cWCVUBxqrbsxuDSdF1gAE.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":755,"type":"image","format":"svg","createdAt":"2023-08-30T06:01:39.094Z","meta":{"width":15,"height":15}},{"id":"e04b2f18-eff3-43d7-a8a5-e0fe61d8f3d3","name":"logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":16276,"type":"image","format":"svg","createdAt":"2023-03-24T21:43:47.942Z","meta":{"width":280,"height":211}},{"id":"fd5358bb-1c6a-444a-88e0-a372dd971196","name":"cib-github_lGytwpLtQ6Y-OqmnrFxq2.svg","description":null,"projectId":"3cbeaff9-b371-4122-9aeb-6e04bc3c7120","size":1458,"type":"image","format":"svg","createdAt":"2023-02-25T03:33:13.012Z","meta":{"width":24,"height":24}}]
export const pageData: PageData = {"site":{"siteName":"","faviconAssetId":"","code":""},"page":{"id":"ubi4k5x4dJzJCCchMIwtC","name":"Home","title":"Home","meta":{},"rootInstanceId":"quj5c9wlKZkBNobFjf6z8","path":""}};
export const user: { email: string | null } | undefined = {"email":"glauberfranco.dsg@gmail.com"};
export const projectId = "3cbeaff9-b371-4122-9aeb-6e04bc3c7120";

const Page = () => {
let [accordionValue, set$accordionValue] = useState<any>("0")
let [dialogOpen, set$dialogOpen] = useState<any>(false)
let [formState, set$formState] = useState<any>("initial")
let onValueChange = (value: any) => {
accordionValue = value
set$accordionValue(accordionValue)
}
let onStateChange = (state: any) => {
formState = state
set$formState(formState)
}
return <Body
data-ws-id="quj5c9wlKZkBNobFjf6z8"
data-ws-component="Body">
<Box
data-ws-id="Ak9ZhwbKBuzkM-OCNjcN6"
data-ws-component="Box">
<Box
data-ws-id="BuCPOOz5RHRFyI9WJ3J_b"
data-ws-component="Box">
<Image
data-ws-id="XujQUzamIdiu6IuxbIeK2"
data-ws-component="Image"
src={"/assets/josh-rocklage-HAAsKeZbHAc-unsplash_NE1qfBY6TNANGiAFuXiKA.jpg"}
loading={"eager"}
alt={"Hero Image"} />
</Box>
<Box
data-ws-id="hCFyX9PqfZt6Y9ZoOOdKY"
data-ws-component="Box" />
<Box
data-ws-id="U_qJ1KmliHkYWUhqZ1XBN"
data-ws-component="Box" />
<Link
data-ws-id="RAplALchDa3Qianckm_4Q"
data-ws-component="Link">
{"Voiceworks Studios"}
</Link>
<Box
data-ws-id="8KtB-gVEWANmmIUxPBkPL"
data-ws-component="Box">
<Heading
data-ws-id="kh3BIqzrb2WhzewNaWqo1"
data-ws-component="Heading"
tag={"h1"}>
{"Your Voice, "}
<Span
data-ws-id="_ymBRJeh8oenSgmwT2fzG"
data-ws-component="Span">
{"Your Story"}
</Span>
</Heading>
</Box>
<Box
data-ws-id="6lDFTBHpEnn0hxQpuUCZH"
data-ws-component="Box">
<Box
data-ws-id="mE2x3WDtXUT-36J_D5jsT"
data-ws-component="Box">
<Text
data-ws-id="5gKfnVa_xu-1e0iFgqx4F"
data-ws-component="Text"
tag={"span"}>
{"Whether you're an aspiring singer, a professional speaker, or simply someone who wants to enhance their vocal prowess, we're here to guide you on a transformative journey."}
</Text>
<Link
data-ws-id="O1r5_luYeCOtPNIFEK9NN"
data-ws-component="Link"
href={"/#CTA"}
target={"_self"}>
<Bold
data-ws-id="iOSrTMeBAfyfmIjrn1Et3"
data-ws-component="Bold">
{"Get In Touch"}
</Bold>
</Link>
</Box>
</Box>
</Box>
<Box
data-ws-id="pF8PI2rO7876IBLVLx7vF"
data-ws-component="Box">
<Box
data-ws-id="N369L2hZXRrFUU__5MtWA"
data-ws-component="Box">
<Box
data-ws-id="T_gJ-0Bvl48VdIVebrU8x"
data-ws-component="Box">
<Box
data-ws-id="e7TU2w4qSVNVp3l8IgRbY"
data-ws-component="Box">
<Box
data-ws-id="9ssGDknyHcMFnKc_eFGV_"
data-ws-component="Box">
<Heading
data-ws-id="GCo1aFQdSxeSEI6nAFOOY"
data-ws-component="Heading"
tag={"h3"}>
{"Vocal Recording Perfection"}
</Heading>
<Paragraph
data-ws-id="ssnIxpnRDtCCRvrwOtCLo"
data-ws-component="Paragraph">
{"Your voice plays a critical role in creating the perfect studio sound. Elevate your studio sessions and leave your mark on every recording."}
</Paragraph>
</Box>
<Box
data-ws-id="fUoHCVPM25odbpPQGz1bs"
data-ws-component="Box">
<Heading
data-ws-id="DPebGmU6obavUODqVjQee"
data-ws-component="Heading"
tag={"h3"}>
{"Command the Spotlight"}
</Heading>
<Paragraph
data-ws-id="wmuqOKn1vYuII2qhSxSrL"
data-ws-component="Paragraph">
{"With our guidance, you'll gain the confidence to deliver powerful, pitch-perfect performances that resonate with every audience member."}
</Paragraph>
</Box>
<Box
data-ws-id="hrcymtY4FVmCFvsDUOcv2"
data-ws-component="Box">
<Heading
data-ws-id="YZdT1L4rVaUX2dMiZncnS"
data-ws-component="Heading"
tag={"h3"}>
{"Shape Stories With Your Voice"}
</Heading>
<Paragraph
data-ws-id="UIhr_K8iRJ9ov4VR8GY-A"
data-ws-component="Paragraph">
{"Our specialized training programs cater to the unique demands of audiobook narration, focusing on techniques that enhance clarity, expression, and pacing."}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="TcNmY8rBR4xvkJT-nd4Qs"
data-ws-component="Box">
<Box
data-ws-id="awsBitCua5FwtdyzhSRKa"
data-ws-component="Box">
<Box
data-ws-id="utZonpNqRYFjhoi10VGQf"
data-ws-component="Box">
<Image
data-ws-id="DPGSl0avP2fHYAw1LyFB6"
data-ws-component="Image"
src={"/assets/luke-thornton-JNl7o-Mj2cc-unsplash_0qWTlSv7B4rmUKvB_Y1cl.jpg"} />
</Box>
<Box
data-ws-id="0gX_VutVnR7M03ytW7WkD"
data-ws-component="Box">
<Heading
data-ws-id="PbPZ3CmOKyfN0tZeWy8aC"
data-ws-component="Heading"
tag={"h2"}>
<Bold
data-ws-id="ZIFKKS_VBdXSRujuiGh8d"
data-ws-component="Bold">
{"Personalized Approach"}
</Bold>
</Heading>
<Text
data-ws-id="J5JmNLQxWJhTv3Kqy2u6O"
data-ws-component="Text"
tag={"span"}>
{"Whether you're a seasoned performer or just starting to explore your vocal potential, we design a customized training program that aligns with your goals. Through one-on-one coaching and targeted exercises, we empower you to reach new levels of vocal mastery."}
</Text>
</Box>
</Box>
<Box
data-ws-id="AWpAxQ3qCHTQ9j2x3Okva"
data-ws-component="Box">
<Box
data-ws-id="7e2JO-ARIg23AfmgJ1Zru"
data-ws-component="Box">
<Heading
data-ws-id="Kv_lFT3upevBRBATvlUL-"
data-ws-component="Heading"
tag={"h2"}>
<Bold
data-ws-id="iiDZQF6oSX_7nZIoSqtTl"
data-ws-component="Bold">
{"Expert Trainers"}
</Bold>
</Heading>
<Text
data-ws-id="jXHApvxVMZmg6xIYoMq4S"
data-ws-component="Text"
tag={"span"}>
{"With a combined wealth of experience spanning various musical genres and professional stages, our trainers are dedicated to imparting their knowledge to aspiring vocalists like you. Their achievements include captivating performances, recording successes, and years of teaching excellence."}
</Text>
</Box>
<Box
data-ws-id="9VSZvnCFXIcaI3oH5n7GS"
data-ws-component="Box">
<Image
data-ws-id="nt3DxoNzXsgWt5Q5MLJvO"
data-ws-component="Image"
src={"/assets/alex-wong-RIo45CycGCs-unsplash_5z3vcfZKOncrqJsrUk0Dg.jpg"} />
</Box>
</Box>
<Box
data-ws-id="3y8DXaYqQqXvySqAG04A7"
data-ws-component="Box">
<Box
data-ws-id="j8dph9ajfrZo6a9usupVt"
data-ws-component="Box">
<Image
data-ws-id="Gm4BITG6pc_qcL1Jmzr21"
data-ws-component="Image"
src={"/assets/kyle-smith-x0dtRYZovLo-unsplash_BahcweLIUAdV9LkMyFU6v.jpg"} />
</Box>
<Box
data-ws-id="u068NZVYZURC7kmsawGm5"
data-ws-component="Box">
<Heading
data-ws-id="yNNVixheUhB3MOxnGANLn"
data-ws-component="Heading"
tag={"h2"}>
<Bold
data-ws-id="q3rwG7dT0ROElNWqJiXA9"
data-ws-component="Bold">
{"Supportive Community"}
</Bold>
</Heading>
<Text
data-ws-id="5nB3OdkF-vbfWzB59stAA"
data-ws-component="Text"
tag={"span"}>
{"When you join us, you're not just a student; you're a valued member of our creative family. Our nurturing environment fosters connections with fellow vocal enthusiasts, creating opportunities for collaboration, networking, and inspiration."}
</Text>
</Box>
</Box>
</Box>
</Box>
<Box
data-ws-id="gZyXUo8zdHnzm5oW4kbeR"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="iQF1WCohnQq9CUl3VqCWj"
data-ws-component="Box">
<Box
data-ws-id="8SHrGh8eXtlqH97cKho1m"
data-ws-component="Box">
<Box
data-ws-id="5J5HwuqjiHVc25wvYGrkT"
data-ws-component="Box">
<Heading
data-ws-id="4lg7fqZZpwa4eHkecTjcw"
data-ws-component="Heading"
tag={"h2"}>
{"About us"}
</Heading>
<Text
data-ws-id="JT85HKY6uW6B1acH61ORv"
data-ws-component="Text"
tag={"span"}>
{"We believe that every voice has a unique story to tell. Led by a team of experienced trainers who are not only accomplished in their craft but also dedicated mentors, we provide a nurturing environment where our students can thrive."}
</Text>
</Box>
<Box
data-ws-id="PaXqprqS8ByCXwizRV4Od"
data-ws-component="Box">
<Heading
data-ws-id="wX7A04BxkqRa7nuhi6jsP"
data-ws-component="Heading"
tag={"h2"}>
{"Testimonials"}
</Heading>
<Box
data-ws-id="DGURY3yL9JBxnXNKauF3V"
data-ws-component="Box">
<Box
data-ws-id="YTJiRIE6pZfRXEqCymrLB"
data-ws-component="Box">
<Heading
data-ws-id="6PLt8I4n97rV9cGAK3ZF_"
data-ws-component="Heading"
tag={"h3"}>
{" Their supportive coaching helped me overcome my stage anxiety."}
</Heading>
<Paragraph
data-ws-id="_hjwVcLW1x21tJBBYFdkj"
data-ws-component="Paragraph">
{"Sarah M. - Public Speaker"}
</Paragraph>
</Box>
<Box
data-ws-id="i4fopuPvu5z6wvQOzTVFG"
data-ws-component="Box">
<Heading
data-ws-id="2-ZXYMr3CQj8pHME1W9jT"
data-ws-component="Heading"
tag={"h3"}>
{"I'm consistently impressed by the level of vocal artistry they bring to the studio."}
</Heading>
<Paragraph
data-ws-id="rG5MVEeHB2sSTw5WBwtUU"
data-ws-component="Paragraph">
{"David L. - Music Producer"}
</Paragraph>
</Box>
<Box
data-ws-id="8scgJ7tjeRvg8HsL7g0tf"
data-ws-component="Box">
<Heading
data-ws-id="kZKhbVoZoo_p7nYmz2XOH"
data-ws-component="Heading"
tag={"h3"}>
{"From the first note to the final encore, my voice has never sounded better."}
</Heading>
<Paragraph
data-ws-id="M0aFnOOLjQDqytJB-FHuk"
data-ws-component="Paragraph">
{"Jake M. - Live Musician"}
</Paragraph>
</Box>
</Box>
</Box>
<Box
data-ws-id="SjWdUWpDIvbOdsNOEVVMI"
data-ws-component="Box">
<Heading
data-ws-id="B7iQFMaN4NKDxFmwA3eVn"
data-ws-component="Heading"
tag={"h2"}>
{"Frequently Asked Questions"}
</Heading>
<Accordion
data-ws-id="K1c7HyKjZWGVGCW0BYXzJ"
data-ws-component="@webstudio-is/sdk-components-react-radix:Accordion"
collapsible={true}
value={accordionValue}
onValueChange={onValueChange}>
<AccordionItem
data-ws-id="uPWUG57LFLZmSCBm1N7H4"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="0">
<AccordionHeader
data-ws-id="uAZt4p7E9ucxE_B7sFCXi"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader">
<AccordionTrigger
data-ws-id="D49IkaUq1dnYYaPIqpXYo"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger">
<Text
data-ws-id="8xkfZoB0vZtcEXljkvtXB"
data-ws-component="Text">
{"What is voice training?"}
</Text>
<Box
data-ws-id="CKgFdeWEBXyMauTb7Wxw9"
data-ws-component="Box">
<HtmlEmbed
data-ws-id="EQNMAFefwFYaVpMdCZ9X7"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="6owCq7PeAC6Ohy_YrvF22"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent">
{"Voice training involves techniques and exercises designed to improve vocal quality, range, control, and overall performance."}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="KJEHkskbX0kGCW6-KBW4N"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="1">
<AccordionHeader
data-ws-id="efUEmOVUfMVfTjQhodTTT"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader">
<AccordionTrigger
data-ws-id="tlWluFnI6Pc-hFgjKt5_t"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger">
<Text
data-ws-id="r9ySRM7GtEyVU9KcFQ_xS"
data-ws-component="Text">
{"Who can benefit from voice training?"}
</Text>
<Box
data-ws-id="PgZdF0MVHU_y-1_u-x4CM"
data-ws-component="Box">
<HtmlEmbed
data-ws-id="Qzkn0oztbwkDZOZpevtBc"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="EzUYyCixMM15zA_3vxwfF"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent">
{"Voice training benefits singers, speakers, actors, musicians, and anyone seeking to improve their vocal skills and communication abilities."}
</AccordionContent>
</AccordionItem>
<AccordionItem
data-ws-id="vD_1br77UVY6YF04TUAmV"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionItem"
data-ws-index="2">
<AccordionHeader
data-ws-id="VvghNyxgUcj9LHNElHhbM"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionHeader">
<AccordionTrigger
data-ws-id="PtL3zqaK7QDD4sgkC6ubB"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionTrigger">
<Text
data-ws-id="XH62qFfFUZLVhg-pFt2Cd"
data-ws-component="Text">
{"Do I need prior experience to join your programs?"}
</Text>
<Box
data-ws-id="XThpzvMolal7xzArU7WDM"
data-ws-component="Box">
<HtmlEmbed
data-ws-id="61uQ8ik0-f-9Pe6i6vkgf"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 16 16\" fill=\"currentColor\" width=\"100%\" height=\"100%\" style=\"display: block;\"><path d=\"M4.04 6.284a.65.65 0 0 1 .92.001L8 9.335l3.04-3.05a.65.65 0 1 1 .921.918l-3.5 3.512a.65.65 0 0 1-.921 0L4.039 7.203a.65.65 0 0 1 .001-.92Z\"/></svg>"} />
</Box>
</AccordionTrigger>
</AccordionHeader>
<AccordionContent
data-ws-id="IMy2UfrKi3gUJMMepyxWB"
data-ws-component="@webstudio-is/sdk-components-react-radix:AccordionContent">
{"No, our programs cater to individuals of all skill levels, from beginners to experienced performers."}
</AccordionContent>
</AccordionItem>
</Accordion>
</Box>
</Box>
</Box>
<Box
data-ws-id="80aYdm6XW8phLSGTZIgFP"
data-ws-component="Box"
id={"CTA"}>
<Box
data-ws-id="MZ9sEERhOo5j-0F_BVm43"
data-ws-component="Box">
<Image
data-ws-id="Uo7E2TybKmR1HZZ3WCGGg"
data-ws-component="Image"
src={"/assets/rocco-dipoppa-_uDj_lyPVpA-unsplash_KeTV-4SQ04K-NYYOPSopk.jpg"} />
<Box
data-ws-id="fyC2jjU61cNzyTXbNMyD5"
data-ws-component="Box" />
<Box
data-ws-id="tjyaEN-nIMfuMDbWs6cLU"
data-ws-component="Box" />
</Box>
<Box
data-ws-id="HitDST4NCN1qw7CpBk3qP"
data-ws-component="Box">
<Box
data-ws-id="5cHWgHn9M32PZf3zSaCAQ"
data-ws-component="Box">
<Heading
data-ws-id="OatIIEsK4SosZ_hlfu2Hb"
data-ws-component="Heading"
tag={"h2"}>
{"Start Your Journey to Vocal Confidence"}
</Heading>
<Text
data-ws-id="hSf7uY9gcLzN5YiZq0t-x"
data-ws-component="Text">
{"Our commitment to personalized training, expert guidance, and a supportive community awaits you. Feel free to reach out with any questions, inquiries, or to schedule a trial session. "}
</Text>
</Box>
<Form
data-ws-id="IvyTfyVBtQrbGVT45xUqD"
data-ws-component="Form"
state={formState}
onStateChange={onStateChange}
action={"https://hooks.airtable.com/workflows/v1/genericWebhook/app00Nncuo9prBtDi/wflXzXJni2KJnbsXc/wtrtXAghYRDGjquKx"}>
{(formState === 'initial' || formState === 'error') &&
<Box
data-ws-id="bp6FtQZ_IWrxiJTxCO6WC"
data-ws-component="Box">
<Box
data-ws-id="qPeorsTCanp1xza3NpEe8"
data-ws-component="Box">
<Box
data-ws-id="rEAJcLc5eGAx6H2xou2I_"
data-ws-component="Box">
<Label
data-ws-id="XgxgSGBW5HJGO22Dub0yK"
data-ws-component="Label">
{"Name"}
</Label>
<Input
data-ws-id="XEybdFsHRXEtV--PGClPX"
data-ws-component="Input"
name={"name"}
type={"text"}
placeholder={"nome"} />
</Box>
<Box
data-ws-id="kFIXSbX5tv6t0Ftamzhu4"
data-ws-component="Box">
<Label
data-ws-id="evnC-bQ5dv1XqdQJ60XQN"
data-ws-component="Label">
{"Email"}
</Label>
<Input
data-ws-id="dSu9tj3-9xi3cxw6NIvb_"
data-ws-component="Input"
name={"email"}
type={"email"}
placeholder={"telefone"} />
</Box>
<Box
data-ws-id="ezm_4IkadZEjI-ET0enXP"
data-ws-component="Box">
<Label
data-ws-id="XdgveBZyF1MvyQ2Q2i4oZ"
data-ws-component="Label">
{"Message"}
</Label>
<Textarea
data-ws-id="RMvX31bWJXANggaDw8V2n"
data-ws-component="Textarea"
placeholder={"mensagem"}
name={"message"} />
</Box>
</Box>
<Button
data-ws-id="sD7ffSFISCQ7spgYT28mm"
data-ws-component="Button"
type={"submit"}>
<Bold
data-ws-id="zycA9cG17v2J8Ur7o72HM"
data-ws-component="Bold">
{"Submit"}
</Bold>
</Button>
</Box>
}
{(formState === 'success') &&
<Box
data-ws-id="LYadCqAh0BVW8BnCjN959"
data-ws-component="Box">
{"Thank you for getting in touch!"}
</Box>
}
{(formState === 'error') &&
<Box
data-ws-id="Im3Qrm-fMVhkElknXOazg"
data-ws-component="Box">
{"Sorry, something went wrong."}
</Box>
}
</Form>
</Box>
</Box>
<Box
data-ws-id="LPg-BAnYqcwFhR0DMd7Fx"
data-ws-component="Box">
<Box
data-ws-id="hwjT2urzxjKC53VH3zMvG"
data-ws-component="Box">
<Box
data-ws-id="9VFeS98F9oX4PZoEJh8cV"
data-ws-component="Box">
<Slot
data-ws-id="Tp_-Kr6Nlj_XJXpnvByE6"
data-ws-component="Slot">
<Fragment
data-ws-id="8Q0MFjkJh-vVI0hdQZYjl"
data-ws-component="Fragment">
<Link
data-ws-id="FyT-v6nLSDC-Jx_stzBTr"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="Rgqq3M76cgkuYQPFU5bWK"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 9.32426C12.313 9.32426 9.32426 12.313 9.32426 16C9.32426 19.6868 12.313 22.6756 16 22.6756C19.6868 22.6756 22.6756 19.6868 22.6756 16C22.6756 12.313 19.6868 9.32426 16 9.32426ZM16 20.3333C13.6067 20.3333 11.6666 18.3932 11.6666 16C11.6666 13.6067 13.6067 11.6666 16 11.6666C18.3932 11.6666 20.3333 13.6067 20.3333 16C20.3333 18.3932 18.3932 20.3333 16 20.3333Z\" fill=\"currentcolor\"></path>\n  <path d=\"M22.9422 10.6203C23.8038 10.6203 24.5023 9.92187 24.5023 9.06029C24.5023 8.19872 23.8038 7.50032 22.9422 7.50032C22.0807 7.50032 21.3822 8.19872 21.3822 9.06029C21.3822 9.92187 22.0807 10.6203 22.9422 10.6203Z\" fill=\"currentcolor\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 3C12.4694 3 12.0267 3.01497 10.6401 3.07823C9.25642 3.14139 8.3114 3.36112 7.48445 3.68251C6.62959 4.01473 5.90461 4.45925 5.1819 5.18195C4.45919 5.90466 4.01468 6.62964 3.68246 7.48451C3.36107 8.3114 3.14134 9.25642 3.07818 10.6401C3.01491 12.0267 3 12.4694 3 16C3 19.5306 3.01491 19.9733 3.07818 21.3599C3.14134 22.7436 3.36107 23.6886 3.68246 24.5155C4.01468 25.3704 4.45919 26.0953 5.1819 26.8181C5.90461 27.5408 6.62959 27.9853 7.48445 28.3175C8.3114 28.6389 9.25642 28.8587 10.6401 28.9218C12.0267 28.985 12.4694 29 16 29C19.5306 29 19.9733 28.985 21.3599 28.9218C22.7436 28.8587 23.6886 28.6389 24.5155 28.3175C25.3704 27.9853 26.0953 27.5408 26.8181 26.8181C27.5408 26.0953 27.9853 25.3704 28.3175 24.5155C28.6389 23.6886 28.8587 22.7436 28.9218 21.3599C28.985 19.9733 29 19.5306 29 16C29 12.4694 28.985 12.0267 28.9218 10.6401C28.8587 9.25642 28.6389 8.3114 28.3175 7.48451C27.9853 6.62964 27.5408 5.90466 26.8181 5.18195C26.0953 4.45925 25.3704 4.01473 24.5155 3.68251C23.6886 3.36112 22.7436 3.14139 21.3599 3.07823C19.9733 3.01497 19.5306 3 16 3ZM16 5.34239C19.4711 5.34239 19.8823 5.3556 21.2531 5.41814C22.5206 5.47599 23.2089 5.68777 23.667 5.86575C24.2738 6.10158 24.7069 6.38334 25.1618 6.83822C25.6167 7.29311 25.8984 7.72622 26.1342 8.33297C26.3123 8.79106 26.5241 9.4794 26.5819 10.7469C26.6444 12.1177 26.6577 12.5289 26.6577 16C26.6577 19.4711 26.6444 19.8823 26.5819 21.2531C26.5241 22.5206 26.3123 23.2089 26.1342 23.667C25.8984 24.2738 25.6167 24.7069 25.1618 25.1618C24.7069 25.6167 24.2738 25.8984 23.667 26.1342C23.2089 26.3123 22.5206 26.5241 21.2531 26.5819C19.8825 26.6444 19.4714 26.6577 16 26.6577C12.5286 26.6577 12.1175 26.6444 10.7469 26.5819C9.4794 26.5241 8.79106 26.3123 8.33297 26.1342C7.72617 25.8984 7.29311 25.6167 6.83817 25.1618C6.38329 24.7069 6.10153 24.2738 5.86575 23.667C5.68772 23.2089 5.47594 22.5206 5.41809 21.2531C5.35555 19.8823 5.34234 19.4711 5.34234 16C5.34234 12.5289 5.35555 12.1177 5.41809 10.7469C5.47594 9.4794 5.68772 8.79106 5.86575 8.33297C6.10153 7.72622 6.38329 7.29311 6.83817 6.83822C7.29311 6.38334 7.72617 6.10158 8.33297 5.86575C8.79106 5.68777 9.4794 5.47599 10.7469 5.41814C12.1177 5.3556 12.5289 5.34239 16 5.34239Z\" fill=\"currentcolor\"></path>\n</svg>\n"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="1stvqn_URUxBfuAYny_6T"
data-ws-component="Slot">
<Fragment
data-ws-id="V__dGEzfKk2gxPcXttGk7"
data-ws-component="Fragment">
<Link
data-ws-id="5gU7J6v9W1gJ2xEf1vi7V"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="iwC3fh8QmiifAx0IRPE-2"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M26.9055 6.45923C24.8411 5.5141 22.6617 4.8436 20.4232 4.46484C20.1168 5.01247 19.8396 5.5759 19.5928 6.15278C17.2082 5.79345 14.7833 5.79345 12.3987 6.15278C12.1517 5.57596 11.8745 5.01253 11.5683 4.46484C9.32824 4.8468 7.14745 5.51889 5.08099 6.46417C0.978546 12.5338 -0.133562 18.4527 0.422492 24.2876C2.82499 26.0626 5.51407 27.4126 8.37286 28.2788C9.01658 27.413 9.58618 26.4945 10.0756 25.5331C9.14599 25.1859 8.24865 24.7575 7.39418 24.253C7.61907 24.0898 7.83905 23.9218 8.05159 23.7587C10.538 24.928 13.2518 25.5342 15.9994 25.5342C18.7471 25.5342 21.4609 24.928 23.9473 23.7587C24.1623 23.9342 24.3822 24.1022 24.6047 24.253C23.7485 24.7584 22.8496 25.1875 21.9183 25.5356C22.4072 26.4965 22.9768 27.4143 23.6211 28.2788C26.4823 27.4161 29.1735 26.0668 31.5764 24.29C32.2288 17.5234 30.4618 11.659 26.9055 6.45923ZM10.7799 20.6992C9.23038 20.6992 7.95023 19.293 7.95023 17.563C7.95023 15.833 9.18588 14.4145 10.775 14.4145C12.3641 14.4145 13.6343 15.833 13.6072 17.563C13.58 19.293 12.3591 20.6992 10.7799 20.6992ZM21.2189 20.6992C19.6669 20.6992 18.3917 19.293 18.3917 17.563C18.3917 15.833 19.6274 14.4145 21.2189 14.4145C22.8104 14.4145 24.0709 15.833 24.0437 17.563C24.0165 19.293 22.7981 20.6992 21.2189 20.6992Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="mwXOl68Y2paUTcxaBZL5j"
data-ws-component="Slot">
<Fragment
data-ws-id="3jrC23nBls-CM78bjn-Dl"
data-ws-component="Fragment">
<Link
data-ws-id="jtzW3xMWxlp1BN8bObwp9"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="oFrcr5Qzs101Q1aHxu5wB"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M6.19097 9.38193C7.96372 9.38193 9.38193 7.96372 9.38193 6.19097C9.38193 4.41821 7.96372 3 6.19097 3C4.41821 3 3 4.41821 3 6.19097C3 7.96372 4.41821 9.38193 6.19097 9.38193ZM8.79225 11.6267H3.47397V28.9997H8.79225V11.6267ZM20.7266 16.0003C18.5993 16.0003 17.4174 17.4186 17.4174 19.9004C17.4174 22.5005 17.4174 29.0006 17.5356 29.0006H12.3355V11.6275H17.5356V13.9912C17.5356 13.9912 19.072 11.1548 22.7357 11.1548C26.3994 11.1548 28.9994 13.4003 28.9994 18.0095V29.0006H23.6812V19.9004C23.6812 17.4186 22.7357 16.0003 20.7266 16.0003Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="LPdhoZ11veTLM6TZNhMBf"
data-ws-component="Slot">
<Fragment
data-ws-id="N8xvoUUMU4iEZhTZ_YStb"
data-ws-component="Fragment">
<Link
data-ws-id="6PbVZPW_OOpYEIAUQXWbi"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="QTJJIkJHZRch3gjMePDDN"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M24.0516 3.3457H28.3452L18.9651 14.0671L30 28.6564H21.3598L14.5924 19.8081L6.84902 28.6564H2.55291L12.5858 17.1887L2 3.3457H10.8596L16.9767 11.4335L24.0516 3.3457ZM22.5448 26.0864H24.9238L9.56687 5.78073H7.01386L22.5448 26.0864Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="EPSXB4S3AnsmaPVc5pJDG"
data-ws-component="Slot">
<Fragment
data-ws-id="iaqPGmCuZsh9y6qNU9KNb"
data-ws-component="Fragment">
<Link
data-ws-id="pPg-kjiSnu1dxt14b10E-"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="ymq07x9rzHp-WhdBL64nv"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M13.0755 28H17.8395V15.9551H21.1654L21.5249 11.9101H17.8395C17.8395 11.9101 17.8395 10.382 17.8395 9.57303C17.8395 8.58427 18.0193 8.22472 18.9182 8.22472C19.6373 8.22472 21.5249 8.22472 21.5249 8.22472V4C21.5249 4 18.7384 4 18.1991 4C14.6036 4 12.9856 5.61798 12.9856 8.58427C12.9856 11.191 12.9856 11.8202 12.9856 11.8202H10.4688V15.8652H12.9856V28H13.0755Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="e_Waz5Ltf6pKiStKI_Fte"
data-ws-component="Slot">
<Fragment
data-ws-id="DB63_vpXUbIa1HEgVopI6"
data-ws-component="Fragment">
<Link
data-ws-id="_pjjt_K9DkY5x8AicXQPj"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="doFh1VNa7tD8DiHYpBJYl"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M31.281 8.28904C31.9488 10.7806 31.9488 15.979 31.9488 15.979C31.9488 15.979 31.9488 21.1774 31.281 23.6687C30.9136 25.0433 29.8311 26.126 28.4565 26.4934C25.9648 27.1608 15.9743 27.1608 15.9743 27.1608C15.9743 27.1608 5.98369 27.1608 3.49191 26.4934C2.11755 26.126 1.03486 25.0433 0.667456 23.6687C0 21.1774 0 15.979 0 15.979C0 15.979 0 10.7806 0.667456 8.28904C1.03486 6.91443 2.11755 5.83198 3.49191 5.46458C5.98369 4.79688 15.9743 4.79688 15.9743 4.79688C15.9743 4.79688 25.9648 4.79688 28.4565 5.46458C29.8311 5.83198 30.9136 6.91443 31.281 8.28904ZM12.7792 20.7714L21.0795 15.979L12.7792 11.1867V20.7714Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="_abmI1DubQp-nr2qRiGFn"
data-ws-component="Slot">
<Fragment
data-ws-id="W2g-yNwK4cOqkj-wQ_Hs5"
data-ws-component="Fragment">
<Link
data-ws-id="u6F9s3Un8S0_Uh1A8E9SZ"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="AmaHiHJnHXWD5WMKCLQHs"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M9.10234 17.7908C9.39008 17.8867 9.77372 17.7908 9.86963 17.4072C9.96555 17.1194 10.0615 16.544 10.1574 16.2562C10.2533 15.8726 10.2533 15.7767 9.96555 15.4889C9.39008 14.8176 9.00643 13.9544 9.00643 12.7075C9.00643 9.06287 11.692 5.80188 16.1039 5.80188C19.9403 5.80188 22.0504 8.19967 22.0504 11.2688C22.0504 15.393 20.2281 18.9418 17.4466 18.9418C15.9121 18.9418 14.857 17.6949 15.1448 16.1603C15.6243 14.338 16.3916 12.4198 16.3916 11.077C16.3916 9.92607 15.7202 8.96696 14.4734 8.96696C12.9388 8.96696 11.692 10.5975 11.692 12.7075C11.692 14.0503 12.1715 15.0094 12.1715 15.0094C12.1715 15.0094 10.6369 21.6273 10.3492 22.8741C9.77372 25.176 10.2533 28.0534 10.3492 28.3411C10.3492 28.5329 10.6369 28.5329 10.7328 28.437C10.8288 28.2452 12.747 26.0392 13.3225 23.7373C13.5143 23.066 14.3775 19.805 14.3775 19.805C14.857 20.7641 16.2957 21.6273 17.9262 21.6273C22.53 21.6273 25.695 17.4072 25.695 11.7484C25.695 7.52829 22.0504 3.5 16.5834 3.5C9.77372 3.5 6.32091 8.39149 6.32091 12.5157C6.12909 14.8176 7.0882 17.0235 9.10234 17.7908Z\" fill=\"currentcolor\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
<Slot
data-ws-id="YEYaj0_f_4uUyqL8sDKWu"
data-ws-component="Slot">
<Fragment
data-ws-id="vt2y9hNBQ-KXLTFaWun-S"
data-ws-component="Fragment">
<Link
data-ws-id="Sh_TpCT5uCm-Bz2DWmZku"
data-ws-component="Link"
target={"_blank"}
href={"https://webstudio.is/"}>
<HtmlEmbed
data-ws-id="aRUqZA4U2NkHMnR3HowhV"
data-ws-component="HtmlEmbed"
code={"<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"100%\" height=\"100%\" viewBox=\"0 0 32 32\" fill=\"none\">\n  <path d=\"M13.75 16H18.0002C18.597 16 19.1693 15.7629 19.5912 15.341C20.0132 14.919 20.2502 14.3467 20.2502 13.75C20.2502 13.1533 20.0132 12.581 19.5912 12.159C19.1693 11.7371 18.597 11.5 18.0002 11.5H13.75V16Z\" fill=\"currentcolor\n\"></path>\n  <path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M16 31C24.2845 31 31 24.2845 31 16C31 7.7155 24.2845 1 16 1C7.7155 1 1 7.7155 1 16C1 24.2845 7.7155 31 16 31ZM10.75 8.5H18.0002C19.3926 8.5 20.728 9.05312 21.7126 10.0377C22.6971 11.0223 23.2502 12.3576 23.2502 13.75C23.2502 15.1424 22.6971 16.4777 21.7126 17.4623C20.728 18.4469 19.3926 19 18.0002 19H13.75V23.5H10.75V8.5Z\" fill=\"currentcolor\n\"></path>\n</svg>"} />
</Link>
</Fragment>
</Slot>
</Box>
<Text
data-ws-id="Rw7rQWN8k7kOMitZGqprI"
data-ws-component="Text">
{"©2023 Voiceworks Studios. All rights reserved. Created with Webstudio"}
</Text>
</Box>
</Box>
<Slot
data-ws-id="iPJFBZp1Rc0vgcr9oEhHN"
data-ws-component="Slot">
<Fragment
data-ws-id="TpTp2RjbCtW5ofWZSiagR"
data-ws-component="Fragment">
<Link>
<Image
data-ws-id="xP5kvTqG1Ud1udrWZC0cD"
data-ws-component="Image"
src={"/assets/logo-icon-color_7lPMMn5N1_sztj7QUZvvx.svg"}
alt={""}
loading={"eager"}
aria-hidden={true} />
<Text
data-ws-id="dt6LFeOnmEKrCnCGPuGeB"
data-ws-component="Text">
{"Built with Webstudio"}
</Text>
</Link>
</Fragment>
</Slot>
</Body>
}


export { Page }


  export const pagesPaths = new Set([""])

  export const formsProperties = new Map<string, { method?: string, action?: string }>([["IvyTfyVBtQrbGVT45xUqD",{"action":"https://hooks.airtable.com/workflows/v1/genericWebhook/app00Nncuo9prBtDi/wflXzXJni2KJnbsXc/wtrtXAghYRDGjquKx"}]])
  
