import Image from 'next/image';
import NextLink from 'next/link';

import { Launch } from 'utils/types';

import { Avatar, Box, Button, Flex, Link, Text } from '@chakra-ui/react';

import WikipediaIcon from 'components/Svg/Wikipedia';
import YoutubeIcon from 'components/Svg/Youtube';

interface Props {
  launch: Launch;
  shouldNavigate?: boolean;
}

export default function LaunchCard(props: Props) {
  const { launch, shouldNavigate } = props;

  return (
    <Box boxShadow="0px 0px 0px 1px #E0E0E0" borderRadius={4} w={350}>
      <Flex alignItems="center" px={3} py={2}>
        <Avatar
          width={5}
          height={5}
          name={launch?.mission_name || ''}
          src={launch.links?.mission_patch_small || ''}
          mr={2}
        />
        <Text
          fontSize="12px"
          fontWeight={700}
          lineHeight="150%"
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          {launch?.mission_name}
        </Text>
      </Flex>

      <Box
        w="100%"
        height={127}
        position="relative"
        overflow="hidden"
        backgroundColor="#e0e0e0"
      >
        {launch?.links?.flickr_images && launch?.links?.flickr_images[0] && (
          <Image
            style={{ objectFit: 'cover' }}
            fill
            priority
            alt={launch.mission_name || ''}
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
            src={launch.links.flickr_images[0]}
          />
        )}
      </Box>
      <Box p={4}>
        <Text fontSize="18px" fontWeight={700} lineHeight="150%">
          {launch.rocket?.rocket_name}
        </Text>
        <Box overflow="hidden">
          <Text
            whiteSpace="pre-wrap"
            style={{
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: '4',
            }}
            fontSize="12px"
            fontWeight={400}
            lineHeight="150%"
            height="72px"
            color="rgba(0, 0, 0, 0.6)"
          >
            {launch.details}
          </Text>
        </Box>
      </Box>
      <Box px={4} display="flex" justifyContent="space-between" mb={3}>
        <Box>
          {shouldNavigate && (
            <NextLink href={`/${launch.id}`}>
              <Button
                background="rgba(2, 136, 209, 0.04)"
                height="26px"
                color="black"
                width="67px"
                size="sm"
              >
                <Text fontSize="12px" fontWeight={700} lineHeight="150%">
                  SEE MORE
                </Text>
              </Button>
            </NextLink>
          )}
        </Box>

        <Flex gap={4}>
          {launch.links?.video_link && (
            <Link href={launch.links?.video_link} isExternal>
              <Button
                background="rgba(2, 136, 209, 0.04)"
                height="26px"
                width="26px"
                p={0}
                color="black"
                size="sm"
              >
                <YoutubeIcon />
              </Button>
            </Link>
          )}

          {launch.links?.wikipedia && (
            <Link href={launch.links?.wikipedia} isExternal>
              <Button
                background="rgba(2, 136, 209, 0.04)"
                height="26px"
                width="26px"
                p={0}
                color="black"
                size="sm"
              >
                <WikipediaIcon />
              </Button>
            </Link>
          )}
        </Flex>
      </Box>
    </Box>
  );
}
