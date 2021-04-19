<?php

declare(strict_types=1);

/*
 * This file is part of the Monolog package.
 *
 * (c) Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace CoglionCase\Test;

use CoglionCase\CoglionCase;

/**
 * Lets you easily generate log records and a dummy formatter for testing purposes
 * *
 * @author Jordi Boggiano <j.boggiano@seld.be>
 */
class CoglionCaseTest extends \PHPUnit\Framework\TestCase
{
    public function testConvertSuccess(): void
    {
        $this->assertEquals('^^DiOpOrCo^^', CoglionCase::format('diOpoRco'), 'We signo n va un cazzo');
    }

    public function testConvertFail(): void
    {
        $this->assertNotEquals('diOpoRco', CoglionCase::format('diOpoRco'), 'We signo va tutto');
    }
}
