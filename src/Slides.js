import React from 'react';
import './Slides.css';
import Slideshow from 'react-slidez';

export default class Slides extends React.Component {
    componentDidMount(){
    }
    render(){ 
        return (            
                <Slideshow
                    showIndex
                    enableKeyboard
                    useDotIndex
                    defaultIndex={0}
                    effect={'fade'}
                    height={'100%'}
                    width={'100%'}
                    autoplay={false}
                    showArrows={false}
                >
                    <section id="one">
                        <h4>BOOST YOUR SKILLS</h4>
                        <h1>Progressive Web App (PWA)</h1>
                        <img src="https://i.imgur.com/DqKmSyJ.png" alt="logo"/>
                    </section>
                    <section id="two">
                        <h1>Programme PWA :</h1>
                        <ul>
                        <li><strong>1. Qu'est-ce c'est ?</strong></li>
                        <li><strong>2. Pourquoi en développer ?</strong></li>
                        <li><strong>3. Comment c'est fait ?</strong></li>
                        <li><strong>4. Comment A/B Tester ?</strong></li>
                        </ul>
                    </section>
                    <section id="three" className="center">
                        <h1>Qu'est-ce qu'une PWA?</h1>
                        <h1><img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/> <img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/> <img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/> <img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/></h1>
                    </section>
                    <section id="four">
                        <h1>1. Qu'est-ce qu'une PWA ?</h1>
                        <br />
                        <p>Une progressive web app (PWA) est une application web qui peut apparaître à l'utilisateur de la même manière que les applications natives à l'appareil. </p>
                        <br></br><br></br>
                        <p>Ce type d'applications tente de combiner les fonctionnalités offertes par la plupart des navigateurs modernes avec les avantages de l'expérience offerte par les appareils mobile.</p>
                    </section>
                    <section id="five" className="center">
                        <h1>Pourquoi développer une PWA ?</h1>
                        <h1><img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/> <img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/> <img class="emoji" draggable="false" alt="🤔" src="https://twemoji.maxcdn.com/2/svg/1f914.svg" data-marp-twemoji=""/></h1>
                    </section>
                    <section id="six">
                        <h1>2. Pourquoi développer une PWA ?</h1>
                        <ul>
                        <li><strong>Fiable</strong> : Charge instantanément et ne montre jamais le downsaur, même dans des conditions de réseau incertaines<br />
                            <br /></li>
                            <li><strong>Rapide</strong> : Répond rapidement aux interactions des utilisateurs avec des scrolls et animations douces<br />
                            <br /></li>
                            <li><strong>$ Engageante $</strong> : L'utilisateur se sent comme dans une application native sur l'appareil,<br/> avec une expérience utilisateur immersive. Il  reste plus longtemps sur le site et revient plus souvent.</li>
                            </ul>
                        </section>
                    <section id="seven">
                        <h1>++ D'info</h1>
                        <ul className="">
                            <a href="https://developers.google.com/web/progressive-web-apps/#engaging">https://developers.google.com/web/progressive-web-apps/#engaging</a>
                            <li>Les service workers ont permis à Konga d’envoyer <strong>63%</strong> moins de données pour les chargements de page initiaux et <strong>84%</strong> moins de données pour terminer la première transaction</li>
                            <li>La capacité de fournir une meilleure UX a aidé AliExpress à améliorer les conversions pour les nouveaux utilisateurs de tous les navigateurs de <strong>104%</strong> et sur iOS de <strong>82%</strong>.</li>
                            <li>Les notifications Web Push ont aidé eXtra Electronics à augmenter l'engagement de <strong>4X</strong>. Et ces utilisateurs passent deux fois plus de temps sur le site.</li>
                        </ul>
                        </section>
                    <section id="eight">
                        <h1>3. Comment est développée une PWA (baseline)?</h1>
                        <ul>
                        <li><strong>Service Worker</strong> : Un Service Worker est un JavaScript Worker qui permet que <strong>toutes</strong> les URL de l'application se chargent hors connexion</li>
                        <li><strong>Web App Manifest</strong> : Fichier contenant les <strong>métadonnées</strong> fournies pour ajouter à l'écran d'accueil</li>
                        <li><strong>HTTPS</strong> : Exclusivement</li>
                        </ul>
                    </section>
                    <section id="nine">
                        <h1>3. Comment est développée une PWA (baseline)?</h1>
                        <ul>
                        <li><strong>Responsive</strong> : Sur tablettes et mobiles</li>
                        <li><strong>Chargement rapide même dans des mauvaises connections</strong> : Sur Nexus 5 (ou similaire), le &quot;time to interactive&quot; <strong>&lt; 10s</strong> pour une première visite sur un réseau 3G</li>
                        <li><strong>Cross Browser</strong> : Chrome, Edge, Firefox and Safari</li>
                        <li><strong>Transitions de page fluides</strong> : Si une SPA est utilisée (render par le client), passez immédiatement à la page suivante, affichez un écran &quot;skeleton&quot; et avec tout contenu tel que le titre ou le thumbnail déjà disponible pendant le chargement du contenu.</li>
                        </ul>
                    </section>
                    <section id="ten">
                        <h1>4. Comment A/B Tester ?</h1>
                        <p>Un <em>Service Worker</em> se comporte comme un Proxy réseau programmable qui permet de contrôler le traitement des demandes réseau de votre page.</p>
                        <p>Une fois activé, le SW &quot;manipule&quot; (<em>handle</em>) des <em>fetch</em> et <em>message</em> <em>events</em></p>
                    </section>
                    <section id="eleven">
                        <h1>Merci ! <img class="emoji" draggable="false" alt="😄" src="https://twemoji.maxcdn.com/2/svg/1f604.svg" data-marp-twemoji=""/></h1>
                    </section>
                </Slideshow>
        );
    }
}