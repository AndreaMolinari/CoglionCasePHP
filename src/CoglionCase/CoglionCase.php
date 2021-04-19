<?php

declare(strict_types=1);

namespace CoglionCase;
// final class CoglionCase
class CoglionCase
{
    public static function format(string $src): string
    {
        for ($i=0; $i < strlen($src); $i++) { 
            if ($i % 2 === 0) {
                $src[$i] = strtoupper($src[$i]);
            } else {
                $src[$i] = strtolower($src[$i]);
            }
        }

        return '^^' . $src . '^^';
    }
}
