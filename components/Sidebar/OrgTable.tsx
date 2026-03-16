import React, { ReactNode } from 'react'
import { Box, chakra } from '@chakra-ui/react'

export const OrgTable = ({ children }: { children: ReactNode }) => {
  return (
    <Box overflowX="auto" my={3}>
      <chakra.table
        width="100%"
        borderCollapse="collapse"
        fontSize="13px"
        sx={{
          'th, td': {
            border: '1px solid',
            borderColor: 'gray.400',
            px: 2,
            py: 1,
          },
          th: {
            bg: 'gray.600',
            color: 'white',
            fontWeight: 'bold',
            textAlign: 'left',
          },
          'tbody tr:nth-of-type(even)': {
            bg: 'gray.50',
          },
        }}
      >
        {children}
      </chakra.table>
    </Box>
  )
}
