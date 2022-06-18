import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import {Button, Container, Row} from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Link from 'next/link'

const Bodys= () => {     
    return(
        <div>
            <main>
                <Container className='mt-4 mb-4'>
                    <Row>
                        <div className='col-lg-6 col-12 d-flex align-items-center '>
                            <div >
                                <div className='d-flex justify-content-center'>
                                    <h1>Historia</h1>
                                </div>
                                <div className='d-flex justify-content-center'>
                                    <p className='text-center'>Fue publicado originalmente en la revista Shōnen Jump, de la editorial japonesa Shūeisha, entre 1984 y 1995. Su trama describe las aventuras de Gokū, un guerrero saiyajin, cuyo fin es proteger a la Tierra de otros seres que quieren conquistarla y exterminar a la humanidad.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6' >
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/2pag-1.png'  width={500} height={650} layout='intrinsic'/>  
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container className='mb-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Manga</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center'>                    
                            <p className='text-center'>Esta primer saga conto con un total de 519 capítulos en el cual podemos como Goku junto a sus amigos van pasando buenos momentos como malos superandose cada dia más</p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                    <Image  src='/assets/1-manga.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer manga en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/2-manga.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo manga en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Episodios</h1>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/1-episodio.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el primer episodio en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/2-episodio.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                            <div>
                                <p className='text-center'>Fue el ultimo episodio en salir de la primer saga de dragon ball en el cual .....</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1>Capitulos más vistos </h1>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='col-12 col-lg-3'>
                            <div className='d-flex justify-content-center'>                                            
                                <Image  src='/assets/top5.png'  width={700} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <div>
                                <h1 className=' text-center'>Top 5 </h1>
                                <h2 className=' text-center'> Episodio 4</h2>
                                <p className='text-center'>nos zambullimos de lleno en los primeros episodios de la serie, pues el capítulo 4 se hizo con el quinto mejor registro de audiencia. La primera aparición de Oolong hizo estragos en la serie, y es que sus curiosas transformaciones pusieron en jaque a toda una aldea. ¡Afortunadamente, Goku y Bulma hicieron acto de presencia para salvar el día, y de paso, reclutar un nuevo compañero de aventuras!</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/top4.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3'>
                            <div>
                                <h1 className=' text-center'>Top 4  </h1>
                                <h2 className=' text-center'> Episodio 38</h2>
                                <p className='text-center'>Los episodios de la Muscle Tower fueron realmente increíbles, con uno de los Son Goku más serios que se recuerdan en los primeros compases de la obra. Uno de sus adversarios más temibles fue el ninja Murasaki, que en este episodio logró incluso a multiplicarse por 5. ¿O quizás no era una multiplicación?</p>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/top3.png'  width={600} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4 '>
                            <div>
                                <h1 className=' text-center'>Top 3</h1>
                                <h2 className=' text-center'> Episodio 50</h2>
                                <p className='text-center'>Ya inmersos en la cueva de los piratas, Goku y sus amigos tendrán que hacer frente a las trampas submarinas, las cuales se antojaban más peligrosas que las propias acciones del General Blue y sus soldados. ¿Os acordáis del robot pirata? Pues lo vimos en este capítulo, el tercero más visto de la serie en Japón.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/top2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Top 2</h1>
                                <h2 className=' text-center'> Episodio 56</h2>
                                <p className='text-center'>Como vais a comprobar, el arco del ejército Red Ribbon protagoniza este top de audiencia, y es que la llegada de Goku y el General Blue a Villa Pingüino se hizo con el segundo puesto de los capítulos más vistos de la serie. La aparición de Arale en Dragon Ball fue todo un puntazo que los registros de audiencia no dejaron pasar por alto.</p>
                            </div>
                        </div>
                    </Row>
                    <Row className='mt-4'>
                        <div className='d-flex justify-content-center'>
                            <h1>El top 1 es para:</h1>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <Image  src='/assets/top1.png'  width={600} height={650} layout='intrinsic'/>
                        </div>
                        <div >
                            <h2 className=' text-center'> Episodio 47</h2>
                            <p className='text-center'>Estamos en plena saga del ejército Red Ribbon, y Goku y Bulma han localizado una nueva dragon ball en las profundidades del océano. Debido a esto, optan por dirigirse a la Kame House y pedir ayuda a Mutenroshi, pero no saben que el temible ejército del lazo rojo les está persiguiendo en la sombra. Sí, estáis ante el episodio con más audiencia de Dragon Ball.</p>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Peliculas </h1>
                        </div>
                    </Row>
                    <Row>
                        <div  className='d-flex justify-content-center'>
                            <p className='text-center'>Esta saga cuenta un total de 4 peliculas las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: La leyenda de Shen Long</h1>
                                <h2 className=' text-center'> Fecha de estreno:20 de diciembre de 1986 </h2>
                                <p className='text-center'> llamada en Hispanoamérica La Leyenda de Shen Long, y en España: La leyenda del dragón Xerón[2], es la primera película basada en la serie de manga y anime de Dragon Ball estrenada el 20 de diciembre de 1986 en el "Festival de caricaturas de Toei" en cines japoneses.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/peli1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: La Bella Durmiente en el Castillo del Mal</h1>
                                <h2 className=' text-center'> Fecha de estreno:18 de julio de 1987 </h2>
                                <p className='text-center'>es la segunda película animada basada en la serie de manga y anime de Dragon Ball, como sucesora de Dragon Ball: La leyenda de Shen Long. Fue estrenada el 18 de julio de 1987 en el "Festival de caricaturas de Toei" en cines japoneses.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/peli2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: Una Aventura Mística</h1>
                                <h2 className=' text-center'> Fecha de estreno:9 de junio de 1988 </h2>
                                <p className='text-center'>Es una película sucesora de Dragon Ball: La princesa durmiente en el castillo del espíritu maligno, siendo también una historia alternativa a la serie que ocurre en un mundo paralelo, tomando lugar posteriormente a los entrenamientos de Kame-Sen'nin,</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/peli3.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Dragon Ball: El camino hacia el más fuerte</h1>
                                <h2 className=' text-center'> Fecha de estreno:4 de marzo de 1996 </h2>
                                <p className='text-center'> Se hizo con motivo del 10.º aniversario de aquella primer serie basada en el manga Dragon Ball, y relata de manera diferente y alternativa los acontecimientos de Dragon Ball desdel principio de la serie hasta el fin del Ejército del Listón Rojo, con mejoras gráficas notables. </p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/peli4.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Especiales </h1>
                        </div>
                    </Row>
                    <Row>
                        <div  className='d-flex justify-content-center'>
                            <p className='text-center'>Esta saga cuenta un total de 2 especiales las cuales son las siguiente: </p>
                        </div>
                    </Row>
                    <Row>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Seguridad vial de Goku</h1>
                                <h2 className=' text-center'> Fecha de estreno:1988 </h2>
                                <p className='text-center'>El vídeo utiliza a los personajes principales de Dragon Ball para promover la seguridad vial. Fue transmitido en TV entre programas como un anuncio de servicio público y distribuido a las escuelas como un vídeo de demostración de seguridad.</p>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/especial1.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div className='d-flex justify-content-center'>
                                <Image  src='/assets/especial2.png'  width={500} height={650} layout='intrinsic'/>
                            </div>
                        </div>
                        <div className='col-12 col-lg-3 mt-4'>
                            <div>
                                <h1 className=' text-center'>Cuerpo de bomberos de Goku</h1>
                                <h2 className=' text-center'> Fecha de estreno:1988  </h2>
                                <p className='text-center'> fue emitido en Japón sobre seguridad contra incendios. En él Goku, Yamcha, Krilin y Roshi tienen puestos de trabajo como bomberos, Bulma por su parte vive en un apartamento junto a Tama.</p>
                            </div>
                        </div>
                    </Row>
                </Container>
                <Container className='mt-4'>
                    <Row>
                        <div className='d-flex justify-content-center'>
                            <h1 className='text-center'>Endings y Openings </h1>
                        </div>
                    </Row>
                    <Row>
                         <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                                <div className='d-flex justify-content-center'>
                                    <h2 className='text-center'>Endings</h2>
                                </div>
                                <div className='d-flex justify-content-center video-open2 align-items-center '>
                                    <div>
                                        <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=Cf4YU-sRRBQ'>Ir a ver</a></Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-12 d-flex justify-content-center'>
                            <div>
                            <div className='d-flex justify-content-center'>
                                <h2 className='text-center'>Openings</h2>
                            </div>
                            <div className='d-flex justify-content-center video-open1 align-items-center '>
                                <div>
                                    <Button variant="dark"><a className='text-white' target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/watch?v=9Hbd1QeI1Og'>Ir a ver</a></Button>
                                </div>
                            </div>
                            </div>
                        </div>
                    </Row>
                </Container>
            </main>
        </div>
    )
}
export default Bodys; 