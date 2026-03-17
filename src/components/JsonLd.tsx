import { Helmet } from 'react-helmet-async'

export function JsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'City Nest Solutions',
    url: 'https://www.citynest-solutions.example', // replace with real domain when available
    description:
      'City Nest Solutions helps organisations strengthen planning, coordination and performance through practical management consultancy.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '15 Kensington High Street',
      addressLocality: 'London',
      postalCode: 'W8 5NP',
      addressCountry: 'GB',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  )
}

