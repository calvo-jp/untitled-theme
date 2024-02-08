"use client";

import { styled } from "@/styled-system/jsx";
import { alert } from "@/styled-system/recipes";
import { createStyleContext } from "@/utils/create-style-context";
import { ark } from "@ark-ui/react/factory";

const { withProvider, withContext } = createStyleContext(alert);

export const Alert = withProvider(styled(ark.div), "root");
export const AlertContent = withContext(styled(ark.div), "content");
export const AlertDescription = withContext(styled(ark.p), "description");
export const AlertIcon = withContext(styled(ark.svg), "icon");
export const AlertTitle = withContext(styled(ark.h5), "title");
