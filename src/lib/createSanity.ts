import { createClient } from 'next-sanity'

import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'sanity'
import { apiVersion, dataset, projectId, useCdn } from '../../sanity/env'

export const createSanity = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

const imageBuilder = createImageUrlBuilder({
  projectId: projectId || '',
  dataset: dataset || '',
})

export const urlForImage = (source: Image) => {
  return imageBuilder?.image(source).auto('format').fit('max')
}
