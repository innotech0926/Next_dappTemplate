'use client';

import { useSignMessage } from '@useelven/core';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const SimpleSignMessageDemo = () => {
  const { signMessage, pending, signature } = useSignMessage();

  const handleSignMessage = () => {
    signMessage({ message: 'Elven Family is awesome!' });
  };

  return (
    <Card className="flex-1 flex flex-col justify-between w-full">
      <CardContent className="mt-6">
        <div className="mb-4">
          You will be signing a hardcoded message:{' '}
          <strong>Elven Family is awesome!</strong>{' '}
        </div>
        {signature && (
          <div className="lg:max-w-lg w-full break-words white">
            Your signature for that message:
            <br />
            <strong>{signature}</strong>
            <br />
            <small>
              You can verify it using{' '}
              <a
                className="underline"
                href="https://www.devnet.buildo.dev"
                target="_blank"
              >
                devnet.buildo.dev
              </a>
            </small>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button
          variant="outline"
          disabled={pending}
          onClick={handleSignMessage}
        >
          Sign a message
        </Button>
      </CardFooter>
    </Card>
  );
};