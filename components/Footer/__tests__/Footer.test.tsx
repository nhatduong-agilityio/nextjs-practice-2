import { render, screen, waitFor } from '@utils/testUtils'
import React from 'react'
import ListLink from '@components/Common/ListLink'
import { AboutUsLinks, CommunityLinks, ContactUsLinks, HelpAndSupportLinks } from '@mock/dataMock'
import Footer from '../Footer'

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}))

describe('Footer', () => {
  it('Should Footer match Snapshot', () => {
    const { container } = render(<Footer />)

    expect(container).toMatchSnapshot()
  })

  it('Should renders the community links', async () => {
    render(<Footer />)

    const communityLink = screen.getByText('Community')

    expect(communityLink).toBeInTheDocument()

    const { container } = render(<ListLink items={CommunityLinks} />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })

  it('Should renders the About Us links', async () => {
    render(<Footer />)

    const aboutUsLink = screen.getByText('About Us')

    expect(aboutUsLink).toBeInTheDocument()

    const { container } = render(<ListLink items={AboutUsLinks} />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })

  it('Should renders the Help & Support links', async () => {
    render(<Footer />)

    const supportLink = screen.getByText('Help & Support')

    expect(supportLink).toBeInTheDocument()

    const { container } = render(<ListLink items={HelpAndSupportLinks} />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })

  it('Should renders the Contact Us links', async () => {
    render(<Footer />)

    const contactLink = screen.getByText('Contact Us')

    expect(contactLink).toBeInTheDocument()

    const { container } = render(<ListLink items={ContactUsLinks} />)

    let lazyContainer

    await waitFor(() => {
      lazyContainer = container
    })

    expect(lazyContainer).toMatchSnapshot()
  })

  it('Should renders other links', async () => {
    render(<Footer />)

    const termOfService = screen.getAllByText('Term of Service')
    const sitemap = screen.getAllByText('Sitemap')
    const privacyPolicy = screen.getAllByText('Privacy Policy')
    const partners = screen.getAllByText('Partners & Affiliates')
    const copyRight = screen.getAllByText('2019 © Test - All right reserved')

    expect(termOfService[0]).toBeInTheDocument()
    expect(sitemap[0]).toBeInTheDocument()
    expect(privacyPolicy[0]).toBeInTheDocument()
    expect(partners[0]).toBeInTheDocument()
    expect(copyRight[0]).toBeInTheDocument()
  })
})
