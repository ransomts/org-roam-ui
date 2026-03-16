import React, { ReactNode } from 'react'
import { Box, Flex, Text } from '@chakra-ui/react'

const ADMONITION_STYLES: Record<string, { borderColor: string; bg: string; label: string }> = {
  note: { borderColor: 'blue.400', bg: 'blue.50', label: 'Note' },
  tip: { borderColor: 'green.400', bg: 'green.50', label: 'Tip' },
  warning: { borderColor: 'orange.400', bg: 'orange.50', label: 'Warning' },
  caution: { borderColor: 'yellow.500', bg: 'yellow.50', label: 'Caution' },
  important: { borderColor: 'red.400', bg: 'red.50', label: 'Important' },
  danger: { borderColor: 'red.600', bg: 'red.50', label: 'Danger' },
  example: { borderColor: 'purple.400', bg: 'purple.50', label: 'Example' },
  quote: { borderColor: 'gray.400', bg: 'gray.50', label: 'Quote' },
}

export interface AdmonitionProps {
  type: string
  children: ReactNode
}

export const Admonition = ({ type, children }: AdmonitionProps) => {
  const style = ADMONITION_STYLES[type] || {
    borderColor: 'gray.400',
    bg: 'gray.50',
    label: type.charAt(0).toUpperCase() + type.slice(1),
  }

  return (
    <Box
      my={3}
      borderLeftWidth={4}
      borderLeftColor={style.borderColor}
      bg={style.bg}
      borderRadius="md"
      overflow="hidden"
    >
      <Text
        fontSize="xs"
        fontWeight="bold"
        textTransform="uppercase"
        color={style.borderColor}
        px={3}
        pt={2}
        pb={1}
      >
        {style.label}
      </Text>
      <Box px={3} pb={2} color="gray.800">
        {children}
      </Box>
    </Box>
  )
}
