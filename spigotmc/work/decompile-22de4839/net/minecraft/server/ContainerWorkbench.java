package net.minecraft.server;

public class ContainerWorkbench extends Container {

    public InventoryCrafting craftInventory = new InventoryCrafting(this, 3, 3);
    public IInventory resultInventory = new InventoryCraftResult();
    private final World g;
    private final BlockPosition h;

    public ContainerWorkbench(PlayerInventory playerinventory, World world, BlockPosition blockposition) {
        this.g = world;
        this.h = blockposition;
        this.a((Slot) (new SlotResult(playerinventory.player, this.craftInventory, this.resultInventory, 0, 124, 35)));

        int i;
        int j;

        for (i = 0; i < 3; ++i) {
            for (j = 0; j < 3; ++j) {
                this.a(new Slot(this.craftInventory, j + i * 3, 30 + j * 18, 17 + i * 18));
            }
        }

        for (i = 0; i < 3; ++i) {
            for (j = 0; j < 9; ++j) {
                this.a(new Slot(playerinventory, j + i * 9 + 9, 8 + j * 18, 84 + i * 18));
            }
        }

        for (i = 0; i < 9; ++i) {
            this.a(new Slot(playerinventory, i, 8 + i * 18, 142));
        }

        this.a((IInventory) this.craftInventory);
    }

    public void a(IInventory iinventory) {
        this.resultInventory.setItem(0, CraftingManager.getInstance().craft(this.craftInventory, this.g));
    }

    public void b(EntityHuman entityhuman) {
        super.b(entityhuman);
        if (!this.g.isClientSide) {
            for (int i = 0; i < 9; ++i) {
                ItemStack itemstack = this.craftInventory.splitWithoutUpdate(i);

                if (!itemstack.isEmpty()) {
                    entityhuman.drop(itemstack, false);
                }
            }

        }
    }

    public boolean a(EntityHuman entityhuman) {
        return this.g.getType(this.h).getBlock() != Blocks.CRAFTING_TABLE ? false : entityhuman.d((double) this.h.getX() + 0.5D, (double) this.h.getY() + 0.5D, (double) this.h.getZ() + 0.5D) <= 64.0D;
    }

    public ItemStack b(EntityHuman entityhuman, int i) {
        ItemStack itemstack = ItemStack.a;
        Slot slot = (Slot) this.c.get(i);

        if (slot != null && slot.hasItem()) {
            ItemStack itemstack1 = slot.getItem();

            itemstack = itemstack1.cloneItemStack();
            if (i == 0) {
                itemstack1.getItem().b(itemstack1, this.g, entityhuman);
                if (!this.a(itemstack1, 10, 46, true)) {
                    return ItemStack.a;
                }

                slot.a(itemstack1, itemstack);
            } else if (i >= 10 && i < 37) {
                if (!this.a(itemstack1, 37, 46, false)) {
                    return ItemStack.a;
                }
            } else if (i >= 37 && i < 46) {
                if (!this.a(itemstack1, 10, 37, false)) {
                    return ItemStack.a;
                }
            } else if (!this.a(itemstack1, 10, 46, false)) {
                return ItemStack.a;
            }

            if (itemstack1.isEmpty()) {
                slot.set(ItemStack.a);
            } else {
                slot.f();
            }

            if (itemstack1.getCount() == itemstack.getCount()) {
                return ItemStack.a;
            }

            ItemStack itemstack2 = slot.a(entityhuman, itemstack1);

            if (i == 0) {
                entityhuman.drop(itemstack2, false);
            }
        }

        return itemstack;
    }

    public boolean a(ItemStack itemstack, Slot slot) {
        return slot.inventory != this.resultInventory && super.a(itemstack, slot);
    }
}
