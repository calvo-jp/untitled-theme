import type {Assign} from '@/types';
import {ark, type HTMLArkProps} from '@ark-ui/react';
import {forwardRef, useEffect, useState} from 'react';
import {codeToHtml, type BundledLanguage} from 'shiki';

interface SyntaxProps extends Assign<HTMLArkProps<'div'>, {children: string}> {
  language: BundledLanguage;
}

export const Syntax = forwardRef<HTMLDivElement, SyntaxProps>(
  ({children, language, ...props}, ref) => {
    const [parsed, setParsed] = useState('');

    useEffect(() => {
      codeToHtml(children, {
        lang: language,
        themes: {
          dark: 'vitesse-dark',
          light: 'vitesse-light',
        },
      })
        .then(setParsed)
        .catch(console.error);

      return () => {
        setParsed('');
      };
    }, [children, language]);

    return <ark.div ref={ref} dangerouslySetInnerHTML={{__html: parsed}} {...props} />;
  },
);

Syntax.displayName = 'Syntax';
