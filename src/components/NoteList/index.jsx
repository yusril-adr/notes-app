import React from 'react';
import {
  Box,
  Heading,
  Divider,
  Grid,
  GridItem,
} from '@chakra-ui/react';

// Global Components
import NoteItem from '../NoteItem';

const NoteList = ({
  title, notes, onUpdate, ...props
}) => (
  <Box
    display="flex"
    flexDir="column"
    {...props}
  >
    <Heading as="h2">
      {title}
    </Heading>

    <Divider mt="4" mb="8" />

    <Grid
      gap="6"
      templateColumns={{
        sm: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
    >
      {notes.map((note) => (
        <GridItem key={note.id}>
          <NoteItem
            {...note}
            onUpdate={onUpdate}
          />
        </GridItem>
      ))}
    </Grid>
  </Box>
);

export default NoteList;
