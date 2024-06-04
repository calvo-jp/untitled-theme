import {Clipboard, ClipboardIndicator, ClipboardTrigger} from '@/lib/clipboard';
import {Icon} from '@/lib/icon';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/lib/tabs';
import {Box, Flex, styled} from '@/styled-system/jsx';
import {CheckIcon, Copy01Icon} from '@untitled-theme/icons-react';
import {IIcon} from './types';

export async function IconDetails({data}: {data: IIcon<true>}) {
  const items = [
    {
      label: 'Html',
      value: 'Html',
      content: data.snippet.html,
    },
    {
      label: 'React',
      value: 'React',
      content: data.snippet.react,
    },
    {
      label: 'Svelte',
      value: 'Svelte',
      content: data.snippet.svelte,
    },
    {
      label: 'Solid',
      value: 'Solid',
      content: data.snippet.solid,
    },
  ];

  return (
    <Box>
      <Box
        w="fit-content"
        p="3"
        rounded="sm"
        borderWidth="1px"
        dangerouslySetInnerHTML={{
          __html: data.html,
        }}
      />

      <Flex
        w="fit-content"
        py="2"
        px="3"
        mt="5"
        maxH="dvh"
        alignItems="center"
        gap="5"
        rounded="sm"
        overflowY="auto"
        bg={{
          base: 'gray-true.100',
          _dark: 'gray-true.800/25',
        }}
      >
        <styled.code fontFamily="mono">&lt;{data.name.pascal}&nbsp;&#47;&gt;</styled.code>

        <Clipboard display="flex" value={data.html}>
          <ClipboardTrigger p="1">
            <ClipboardIndicator
              copied={
                <Icon
                  w="4"
                  h="4"
                  color={{
                    base: 'success.500',
                    _dark: 'success.700',
                  }}
                >
                  <CheckIcon />
                </Icon>
              }
            >
              <Icon w="4" h="4">
                <Copy01Icon />
              </Icon>
            </ClipboardIndicator>
          </ClipboardTrigger>
        </Clipboard>
      </Flex>

      <Tabs mt="5" defaultValue={items[0].value}>
        <TabsList display="flex" gap="4">
          {items.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              _selected={{
                color: {
                  base: 'brand.700',
                  _dark: 'brand.500',
                },
              }}
            >
              {item.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {items.map((item) => {
          return (
            <TabsContent key={item.value} value={item.value} asChild>
              <Box pos="relative" mt="5" fontSize="sm" rounded="sm">
                <Clipboard
                  value={item.content.raw}
                  pos="absolute"
                  top="4"
                  right="4"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  rounded="lg"
                  p="0.5"
                >
                  <ClipboardTrigger p="0.5">
                    <ClipboardIndicator
                      copied={
                        <Icon
                          color={{
                            base: 'success.500',
                            _dark: 'success.700',
                          }}
                        >
                          <CheckIcon />
                        </Icon>
                      }
                    >
                      <Icon>
                        <Copy01Icon />
                      </Icon>
                    </ClipboardIndicator>
                  </ClipboardTrigger>
                </Clipboard>

                <Box
                  css={{
                    '& .shiki': {
                      p: '4',
                      h: 'full',
                      rounded: 'sm',
                      overflow: 'auto',
                      borderWidth: '1px',
                      fontFamily: 'mono',
                      color: {
                        _dark: 'var(--shiki-dark) !important',
                      },
                      bg: {
                        _dark: 'var(--shiki-dark-bg) !important',
                      },
                    },
                    '& .shiki span': {
                      color: {
                        _dark: 'var(--shiki-dark) !important',
                      },
                      bg: {
                        _dark: 'var(--shiki-dark-bg) !important',
                      },
                    },
                  }}
                  dangerouslySetInnerHTML={{
                    __html: item.content.html,
                  }}
                />
              </Box>
            </TabsContent>
          );
        })}
      </Tabs>
    </Box>
  );
}
