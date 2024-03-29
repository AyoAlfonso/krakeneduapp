import h from 'react-hyperscript'
import styled from '@emotion/styled'
import { colors } from '../Tokens'
import { Body, Box, Seperator} from './index'

export default function Footer(){
  return h(FooterContainer, [
    h(Body, [
      h(Columns, [
        // h(Box, {gap: 4}, [
          // h('h4', "More Info"),
          // h(Link, {href: '/team', passHref: true}, h(FooterLink, 'About the Team')),
          // h(Link, {href: '/manual', passHref: true}, h(FooterLink, 'KrakenEdu Manual')),
          // h(Link, {href: '/library', passHref: true}, h(FooterLink, 'KrakenEdu Library')),
          // h(Link, {href: '/faq', passHref: true}, h(FooterLink, 'FAQ')),
        // ]),
        h(Box, {gap: 4}, [
          h('h4', "Contact Us"),
          h(FooterLink, {href: 'https://twitter.com/BojaleLabs'}, 'Twitter'),
          h(FooterLink, {href: 'mailto:contact@reftify.com'}, 'Email')
        ]),
        h(Box, {gap: 4}, [
          // h('h4', "Technical"),
          // h(FooterLink, {href: 'https://gitlab.com/jaredpereira/hyperlink-academy'}, "Source Code"),
          // h(FooterLink, {href: 'https://gitlab.com/jaredpereira/hyperlink-academy/-/issues/new?'}, "Report a Bug"),
        ]),
        h(Box, {gap: 4}, [
          // h('h4', "Policies"),
          // h(FooterLink, {href: '/terms'}, "Terms and Conditions"),
          // h(FooterLink, {href: '/privacy'}, "Privacy Policy"),
        ]),
      ]),
      h('br'),
      h(Seperator),
      h('br'),
      h('p', `© BojaleLabs Inc`)
    ])
  ])
}

const FooterLink = styled('a')`
color: ${colors.textSecondary};
&:visited {color: ${colors.textSecondary};}
&:hover {color: ${colors.linkHover};}
text-decoration: none;
`

const FooterContainer = styled('footer')`
background-color: ${colors.grey95};
width: 100vw;
color: ${colors.textSecondary};
box-sizing: border-box;
margin-top: 32px;
`

const Columns = styled('div')`
// max-width: 640px;
display: grid;
grid-gap: 32px;
grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
grid-auto-flow: row;
`
