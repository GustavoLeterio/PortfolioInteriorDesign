import styles from '../styles/textAndImage.module.css'
import Image from 'next/image'
import { useState, useEffect } from 'react'

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return windowSize;
}

const TextAndImage = (props) => {
    const datas = props.paragraphs
    const size = useWindowSize();
    return (
        <div className={styles.aboutPage}>

            <div className={styles.wrapperText}>
                <h1 className={styles.title}>
                    { (datas !== undefined) ? props.title : "About" }

                </h1>
                {
                    (datas !== undefined) ?
                        datas.map((data) => data.map((mod) =>
                            <div key={mod.id}>
                                <p className={styles.text}>
                                    {mod.text}
                                </p>
                            </div>
                        ))
                        :
                        (
                            <>
                                <p className={styles.text}>
                                    Atuando na área de Edificações há mais de dois anos ao me formar como Técnica em Edificações, possuo amplo conhecimento no campo de Engenharia e Arquitetura. Participei de reuniões e briefings para compreensão das exigências e padronização dos clientes e entregar o melhor resultado dentro das conformidades da legislação e normas técnicas. Apresento facilidade de comunicação, adaptação e motivação, mantendo em constante aprendizado e atualização, dessa forma, elaborei projetos de design de interiores e detalhamentos, sendo peça essencial para o processo criativo de desenvolvimento e concepção de projetos arquitetônicos.
                                </p>
                                <p className={styles.text}>
                                    De natureza criativa e determinada, mantenho-me atualizada através de redes sociais, workshops on-line e conteúdo digital sobre as tendências e novidades do setor. Com um relacionamento cortes, mantenho um ótimo contato e interação com diferentes fornecedores e profissionais do setor. Nos projetos luminotécnicos, minha experiência contempla um diferencial de característica técnica com a correta aplicação das luminárias e suas especificações, criando um ambiente harmonioso e com característica unica, uma assinatura pessoal.
                                </p>
                                <p className={styles.text}>
                                    Disponho de alguns projetos desenhados e dimensionados por mim enquanto fiz parte da equipe de engenheiros e arquitetos de um renomeado escritório de projetos e reformas civil. Estes projetos são decorrentes de dedicação nos estudos de formação profissional e especializações como o Tecnologo em Design de Interiores ao longo de minha jornada.
                                </p>
                            </>
                        )
                }
            </div>
            <div className={styles.imageWrapper} style={props.cssArrangement}><Image src={props.image} quality={100} width={props.width} height={props.height} layout="responsive" /></div>
        </div >
    );
}

export default TextAndImage;