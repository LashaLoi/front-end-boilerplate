import React, { Fragment, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

import { ReactComponent } from '@content/favicon/favicon.svg';

import { SEQUENCES_GRPC_URL } from '@config';

const Title = styled.h1`
	background: red;
	margin: red;
`;

const countClassName = css({
	color: 'blue'
});

export const HelloWorld = () => {
	const [count, setCount] = useState<number>(0);
	const { t } = useTranslation('application-ns');
	return (
		<Fragment>
			<Title>{t('helloWorld')}</Title>
			<div css={countClassName}>{count}</div>
			<div>{SEQUENCES_GRPC_URL}</div>
			<ReactComponent />
			<button onClick={() => setCount(count + 1)}>{t('sum')}</button>
			<button onClick={() => setCount(count - 1)}>{t('rest')}</button>
		</Fragment>
	);
};
