import * as b from 'bobril';
import * as Label from '../../components/label/lib';
import * as List from '../../components/list/lib';
import * as Href from '../../components/href/lib';
import * as LCenter from '../../components/lCenter/lib';
import * as styles from '../styles';

interface IData {
}

interface IContext extends b.IBobrilCtx {
    data: IData;
}

const documentation = b.createComponent<IData>({
    render(ctx: IContext, me: b.IBobrilNode) {
        me.children = [
            LCenter.create({
                    children: [
                        Label.create({
                            label: 'Documentation under construction.',
                            size: Label.LabelSize.Title,
                            style: {
                                textAlign: 'center'
                            }
                        }),
                        b.styledDiv(
                            'We know, that it is not easy to develop application without any documentation. ' +
                            'We hope, that these materials will help you to start.',
                            {
                                marginTop: 24,
                                marginBottom: 24
                            }
                        ),
                        getHowToStartSection(),
                        getExamplesSection()
                    ],
                    maxWidth: styles.maxPageWidth,
                }
            )
        ]
    }
});

function getHowToStartSection() {
    return b.styledDiv(
        [
            Label.create({
                label: 'How to start',
                size: Label.LabelSize.Title
            }),
            List.create({
                items: [
                    {
                        children: Href.create({
                            label: 'Bobril documentation',
                            href: 'https://github.com/Bobris/Bobril/blob/master/src/bobril.md',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - Getting started',
                            href: 'https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - I - Getting started',
                            href: 'https://www.codeproject.com/Articles/1044425/Bobril-I-Getting-Started',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - II - Bobflux Application Architecture',
                            href: 'https://www.codeproject.com/Articles/1055921/Bobril-II-Bobflux-application-architecture',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - III - Localizations and Formatting',
                            href: 'https://www.codeproject.com/Articles/1058132/Bobril-III-Localizations-and-formatting',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - IV - Routing',
                            href: 'https://www.codeproject.com/Articles/1058609/Bobril-IV-Routing',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - V - Bobril-build',
                            href: 'https://www.codeproject.com/Articles/1167901/bobril-build',
                            newWindow: true
                        })
                    },
                    {
                        children: Href.create({
                            label: 'Bobril - Integration to Another Web Application',
                            href: 'https://www.codeproject.com/Articles/1184937/Bobril-Integration-to-Another-Web-Application',
                            newWindow: true
                        })
                    }
                ]
            })
        ]
    );
}

function getExamplesSection() {
    return b.styledDiv([
            Label.create({
                label: 'Examples',
                size: Label.LabelSize.Title
            }),
            List.create({
                items: [
                    {
                        children: Href.create({
                            label: 'Check out examples here.',
                            href: 'https://github.com/Bobris/Bobril/tree/master/examples',
                            newWindow: true
                        })
                    }
                ]
            })
        ],
        {
            marginTop: 16
        }
    );
}

export default documentation;