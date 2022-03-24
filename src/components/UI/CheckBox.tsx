// @ts-nocheck
import React, { ReactNode, useRef, useEffect, forwardRef, Ref } from 'react';

type CheckBoxProps = {
	indeterminate: boolean;
	children?: ReactNode;
};

type CheckBoxRef = HTMLInputElement;

export const CheckBox = forwardRef<CheckBoxRef, CheckBoxProps>(
	({ indeterminate, ...rest }: CheckBoxProps, ref: Ref<CheckBoxRef>) => {
		const defaultRef = useRef<CheckBoxRef>(null);
		const resolvedRef = ref || defaultRef;

		useEffect(() => {
			if (resolvedRef && resolvedRef.current !== null) {
				resolvedRef.current.indeterminate = indeterminate;
			}
		}, [resolvedRef, indeterminate]);

		return (
			<>
				<input type='checkbox' ref={resolvedRef} {...rest} />
			</>
		);
	},
);
