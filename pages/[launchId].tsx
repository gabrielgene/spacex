import client from 'config/apolloClient';
import { LaunchDocument } from 'generatedTypes/graphql';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { Launch } from 'utils/types';

import { ArrowBackIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton } from '@chakra-ui/react';

import LaunchCard from 'components/LaunchCard/LaunchCard';
import Logo from 'components/Svg/Logo';

type Props = {
  launch: Launch;
};

type Params = {
  launchId: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (
  context,
) => {
  const { data } = await client.query({
    query: LaunchDocument,
    variables: { id: context.params?.launchId || '' },
  });

  if (!data.launch) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return {
    props: { launch: data.launch as Launch },
  };
};

export default function LaunchPage(
  props: InferGetServerSidePropsType<typeof getServerSideProps>,
) {
  const router = useRouter();

  const resetPage = () => {
    router.push('/');
  };

  const { launch } = props;
  return (
    <>
      <Head>
        <title>{launch.mission_name}</title>
      </Head>
      <Box>
        <Box display="flex" justifyContent="center" my={4} onClick={resetPage}>
          <IconButton
            variant="link"
            aria-label="nav back"
            icon={<ArrowBackIcon />}
            onClick={() => router.back()}
          />
          <Logo />
          <div style={{ width: 40, height: 'auto' }} />
        </Box>
        <Flex justifyContent="center">
          <LaunchCard launch={launch} shouldNavigate={false} />
        </Flex>
      </Box>
    </>
  );
}
