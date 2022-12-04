import { Box, Input, InputGroup, InputRightAddon } from '@chakra-ui/react';

import SearchIcon from 'components/Svg/Search';

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export default function Search(props: Props) {
  return (
    <Box w={350}>
      <InputGroup>
        <Input
          placeholder="Search"
          value={props.value}
          onChange={(e) => props.onChange(e.target.value)}
        />
        <InputRightAddon backgroundColor="#263238" color="#FFFFFF">
          <SearchIcon />
        </InputRightAddon>
      </InputGroup>
    </Box>
  );
}
