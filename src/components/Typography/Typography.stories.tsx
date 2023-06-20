import React from 'react'
import { Title, Subheader, Paragraph, Caption, DataPoint, BulletedList } from '.'
import { Flex, Box } from '../Flexbox'
import { TextSize, TextColor } from './Typography.types'

export default {
  title: 'Atoms/Typography',
  //component: Button,
}

export const Defaults = () => (
  <>
    <Title mb={5} size="xl">
      A Big Title
    </Title>
    <Title mb={5}>A Title</Title>
    <Flex flexWrap="wrap">
      <Box width={1 / 3} pr={4}>
        <Subheader>Subheader</Subheader>
      </Box>
      <Box width={1 / 3} pr={4}>
        <Paragraph>Paragraph</Paragraph>
      </Box>
      <Box width={1 / 3} pr={4}>
        <Caption>Caption</Caption>
      </Box>
    </Flex>
  </>
)

export const Variants = () => {
  const captionSizes: TextSize[] = ['md', 'sm']
  const captionColors: TextColor[] = [
    'primary',
    'secondary',
    'complementary',
    'info',
    'success',
    'warning',
    'danger',
  ]

  return (
    <>
      <Title mb={5}>Still a Title</Title>
      <Flex flexWrap="wrap">
        <Box width={1 / 4} pr={4}>
          <Subheader size="xl">Subheader XL</Subheader>
          <Subheader size="lg" mt={4}>
            Subheader LG
          </Subheader>
          <Subheader size="md" mt={4}>
            Subheader MD
          </Subheader>
          <Subheader size="sm" mt={4}>
            Subheader SM
          </Subheader>
          <Subheader size="xs" mt={4}>
            Subheader XS
          </Subheader>
        </Box>
        <Box width={1 / 4} pr={4}>
          {captionSizes.map((s, i) => (
            <Box mb={4} key={i}>
              {captionColors.map((c, j) => (
                <Caption size={s} color={c} key={j}>
                  {s} - {c}
                </Caption>
              ))}
            </Box>
          ))}
        </Box>
        <Box width={1 / 4} pr={4}>
          {captionSizes.map((s, i) => (
            <Box mb={4} key={i}>
              {captionColors.map((c, j) => (
                <Caption size={s} color={c} fontWeight={[400]} key={j}>
                  {s} - {c} (bold)
                </Caption>
              ))}
            </Box>
          ))}
        </Box>
        <Box width={1 / 4} pr={6}>
          <Paragraph size="md" color="primary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula fringilla lectus
            eget placerat. Proin hendrerit lobortis nunc ac faucibus. Quisque suscipit dapibus arcu
            sed gravida.
          </Paragraph>
          <Paragraph size="sm" color="complementary" mt={4}>
            Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>. Nunc vehicula
            fringilla lectus eget placerat. Proin hendrerit lobortis nunc ac faucibus. Cras mattis,
            lectus at bibendum fermentum, lacus tortor mattis est, quis lobortis mauris lorem ac
            ipsum.{' '}
            {/* <Link href="#void" size="sm">
              Quisque suscipit
            </Link>{' '} */}
            dapibus arcu sed gravida.
          </Paragraph>
        </Box>
      </Flex>
    </>
  )
}

export const DataPoints = () => (
  <>
    <Subheader>Data point - Large</Subheader>
    <Flex flexWrap="wrap">
      <Box width={1 / 4} pr={4}>
        <DataPoint size="lg" value={30} />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="lg" value={30} showPercentage color="danger" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="lg" value={3000} format="0a" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="lg" />
      </Box>
    </Flex>
    <Subheader mt={5}>Data point - Medium</Subheader>
    <Flex flexWrap="wrap">
      <Box width={1 / 4} pr={4}>
        <DataPoint size="md" value={30} />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="md" value={-30} showPercentage color="danger" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="md" value={310300000} format="0[.]0a" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="md" />
      </Box>
    </Flex>
    <Subheader mt={5}>Data point - Small</Subheader>
    <Flex flexWrap="wrap">
      <Box width={1 / 4} pr={4}>
        <DataPoint size="sm" value={30} />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="sm" value={30} showPercentage color="danger" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="sm" value={3000} format="+0a" />
      </Box>
      <Box width={1 / 4} pr={4}>
        <DataPoint size="sm" />
      </Box>
    </Flex>
  </>
)

// export const CroppingContent = () => (
//   <Flex p={5}>
//     <Box width={1 / 3} px={2}>
//       <Caption size="md">
//         Proin hendrerit lobortis nunc ac faucibus. Cras mattis, lectus at bibendum fermentum, lacus
//         tortor mattis est, quis lobortis mauris lorem ac ipsum. Quisque suscipit dapibus arcu sed
//         gravida.
//       </Caption>
//     </Box>
//     <Box width={1 / 3} px={2}>
//       <Paragraph maxLines={2}>
//         Two lines maximum, <em>consectetur adipiscing elit</em>. Nunc vehicula fringilla lectus eget
//         placerat. Proin hendrerit lobortis nunc ac faucibus. Cras mattis, lectus at bibendum
//         fermentum, lacus tortor mattis est, quis lobortis mauris lorem ac ipsum. Quisque suscipit
//         dapibus arcu sed gravida.
//       </Paragraph>
//     </Box>
//     <Box width={1 / 3} px={2}>
//       <Paragraph maxLines={4}>
//         Also with links inside, <em>consectetur adipiscing elit</em>. Nunc vehicula fringilla lectus
//         eget placerat. Proin hendrerit lobortis nunc ac faucibus. Cras mattis, lectus at bibendum
//         fermentum, lacus tortor mattis est, quis lobortis mauris lorem ac ipsum.{' '}
//         <Link href="#void">Quisque suscipit</Link> dapibus arcu sed gravida.
//       </Paragraph>
//     </Box>
//   </Flex>
// )

// export const WithMoreInfo = () => (
//   <Box p={8}>
//     <Flex alignItems="center" mb={5}>
//       <Title>A Title</Title>
//       <MoreInfo ml={2} helpContent="Something about this title" />
//     </Flex>
//     <Flex flexWrap="wrap">
//       <Box width={1 / 3} pr={4}>
//         <Flex alignItems="center">
//           <Subheader>Subheader</Subheader>
//           <MoreInfo ml={2} helpContent="Something about this title" />
//         </Flex>
//       </Box>
//       <Box width={1 / 3} pr={4}>
//         <Flex alignItems="center">
//           <Caption>Caption</Caption>
//           <MoreInfo ml={2} helpContent="Something about this title" />
//         </Flex>
//       </Box>
//     </Flex>
//   </Box>
// )

export const WithLinksInside = () => (
  <>
    <Title mb={5} size="xl">
      A <a href="#void">Big Title</a>
    </Title>
    <Title mb={5}>
      A <a href="#void">Title</a>
    </Title>
    <Flex flexWrap="wrap">
      <Box width={1 / 3} pr={4}>
        <Subheader>
          I am an average <a href="#void">subheader</a>
        </Subheader>
      </Box>
      <Box width={1 / 3} pr={4}>
        <Paragraph>
          Lorem ipsum dolor <a href="#void">sit amet</a> consecutur.
        </Paragraph>
      </Box>
      <Box width={1 / 3} pr={4}>
        <Caption>
          Lorem <a href="#void">ipsum</a>
        </Caption>
      </Box>
    </Flex>
  </>
)

export const SimpleBulletedList = () => (
  <>
    <Subheader>Bulleted list</Subheader>
    <BulletedList mt={4}>
      <li>Ernie Macmillan</li>
      <li>Hannah Abbott</li>
      <li>Susan Bones</li>
      <li>Zacharias Smith</li>
      <li>Justin Finch-Fletchley</li>
      <li>Silvanus Kettleburn</li>
      <li>Jane Court</li>
    </BulletedList>
  </>
)

// export const LongTextBulletedList = () => (
//   <>
//     <Subheader>Bulleted list</Subheader>
//     <BulletedList mt={4}>
//       <li>
//         Lorem ipsum dolor sit amet, <em>consectetur adipiscing elit</em>. Nunc vehicula fringilla
//         lectus eget placerat. Proin hendrerit lobortis nunc ac faucibus. Cras mattis, lectus at
//         bibendum fermentum, lacus tortor mattis est, quis lobortis mauris lorem ac ipsum.{' '}
//         <Link href="#void">Quisque suscipit</Link> dapibus arcu sed gravida.
//       </li>
//       <li>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula fringilla lectus eget
//         placerat. Proin hendrerit lobortis nunc ac faucibus. Quisque suscipit dapibus arcu sed
//         gravida.
//       </li>
//       <li>
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula fringilla lectus eget
//         placerat. Proin hendrerit lobortis nunc ac faucibus. Quisque suscipit dapibus arcu sed
//         gravida.
//       </li>
//     </BulletedList>
//   </>
// )
