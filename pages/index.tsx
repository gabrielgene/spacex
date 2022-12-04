import client from 'config/apolloClient';
import { LaunchesDocument } from 'generatedTypes/graphql';
import useDebounce from 'hooks/useDebounce';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { handleQuery } from 'utils/handleQuery';
import { Launch } from 'utils/types';

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, Text } from '@chakra-ui/react';

import EmptyScreen from 'components/EmptyScreen/EmptyScreen';
import LaunchCard from 'components/LaunchCard/LaunchCard';
import Search from 'components/Search/Search';
import Logo from 'components/Svg/Logo';

type Props = {
  launches: Launch[];
};

const PAGE_LIMIT = 8;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context,
) => {
  const { data } = await client.query({
    query: LaunchesDocument,
    variables: {
      limit: PAGE_LIMIT,
      missionName: handleQuery(context.query?.name),
      offset: Number(context.query?.page || 0) * PAGE_LIMIT,
    },
  });

  return {
    props: { launches: data.launches as Launch[] },
  };
};

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const router = useRouter();

  const { launches } = props;
  const [value, setValue] = useState<string>(handleQuery(router.query.name));
  const [page, setPage] = useState<number>(Number(router.query.page || 0));
  const debouncedValue = useDebounce<string>(value, 150);

  useEffect(() => {
    const valueQuery = debouncedValue
      ? {
          name: debouncedValue,
        }
      : {};
    const pageQuery = page ? { page } : {};

    router.push({
      query: { ...valueQuery, ...pageQuery },
    });
  }, [page, debouncedValue]);

  const resetPage = () => {
    setPage(0);
    setValue('');
    router.push('/');
  };

  return (
    <Box px={4}>
      <Box display="flex" justifyContent="center" my={4} onClick={resetPage}>
        <Logo />
      </Box>

      <Box>
        <Flex justifyContent="center">
          <Search
            value={value}
            onChange={(v) => {
              setPage(0);
              setValue(v);
            }}
          />
        </Flex>
        {launches.length === 0 ? (
          <EmptyScreen />
        ) : (
          <Box
            mt={5}
            display="flex"
            flexWrap="wrap"
            gap={4}
            justifyContent="center"
          >
            {launches.map((l) => (
              <LaunchCard shouldNavigate key={l?.id} launch={l} />
            ))}
          </Box>
        )}
      </Box>

      <Flex alignItems="center" justifyContent="center" mt={6} mb={4}>
        <IconButton
          variant="outline"
          aria-label="nav back"
          icon={<ChevronLeftIcon />}
          disabled={page === 0}
          onClick={() => setPage(page - 1)}
        />
        <Flex
          justifyContent="center"
          alignItems="center"
          width={26}
          height={26}
          borderRadius={12}
          mx={6}
        >
          <Text fontSize="12px" fontWeight={700} lineHeight="150%">
            {page}
          </Text>
        </Flex>

        <IconButton
          variant="outline"
          aria-label="nav fourward"
          disabled={launches.length === 0}
          icon={<ChevronRightIcon />}
          onClick={() => setPage(page + 1)}
        />
      </Flex>
    </Box>
  );
}
