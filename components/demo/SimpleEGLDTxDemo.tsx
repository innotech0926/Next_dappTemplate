import { Box, Link, Text, Spinner, Flex } from '@chakra-ui/react';
import { TransactionPayload } from '@elrondnetwork/erdjs';
import { useTransaction } from '../../hooks/core/useTransaction';
import { useCallback } from 'react';
import { ActionButton } from '../tools/ActionButton';
import { egldTransferAddress } from '../../config/demo-settings';
import { networkConfig, chainType } from '../../config/network';
import { shortenHash } from '../../utils/shortenHash';
import { FlexCardWrapper } from '../ui/CardWrapper';
import { TransactionCb } from '../../hooks/core/common-helpers/sendTxOperations';

export const SimpleEGLDTxDemo = ({
  cb,
}: {
  cb: (params: TransactionCb) => void;
}) => {
  const { pending, triggerTx, transaction, error } = useTransaction({ cb });

  const handleSendTx = useCallback(() => {
    const demoMessage = 'Transaction demo!';
    triggerTx({
      address: egldTransferAddress,
      gasLimit: 50000 + 1500 * demoMessage.length,
      data: new TransactionPayload(demoMessage),
      value: 0.001,
    });
  }, [triggerTx]);

  return (
    <FlexCardWrapper>
      <Text mb={4}>
        1. You will be sending 0.001 EGLD to the address: <br />
        <Link
          href={`${networkConfig[chainType].explorerAddress}/accounts/${egldTransferAddress}`}
          fontWeight="bold"
        >
          {shortenHash(egldTransferAddress, 8)}
        </Link>{' '}
        <br />
        (devnet)
      </Text>
      <ActionButton disabled={pending} onClick={handleSendTx}>
        <Text>Send Transaction</Text>
      </ActionButton>
    </FlexCardWrapper>
  );
};
